const path = require('path');
const express = require('express');
const app = express();
const redittdata = require('./data.json');

//絶対パスを返す変数
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//拡張子は省略可能 デフォルトでviewsの中を探索しにいく
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    const data = redittdata[subreddit];
    console.log(data);
    // スプレッド構文で記述することでejs側で,data.~を省略可能
    // res.render('subreddit', { name : data.name, subscribers: data.subscribers});
    res.render('subreddit', { ...data});
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random', {num:num});
    //変数がhtmlに渡すバインド変数と同じ名称なら省略できる。
    res.render('random', { num });

});
app.get('/cats', (req,res) => {
    const cats = [
        'たま', 'とら', 'くろ', 'もも', 'じじ'];
    res.render('cats', {cats});
    });

app.listen(3000, () => {
    console.log('こんにちは');
});