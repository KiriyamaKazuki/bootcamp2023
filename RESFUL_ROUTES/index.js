const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
// 分割代入により,uuidパッケージが提示した変数名"v4"がuuidv4に代入される。
const { v4: uuidv4 } = require('uuid');
uuidv4();

//すべてのリクエストで利用可
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

let comments = [
    {
        id: uuidv4(),
        username:'yamada',
        comment: 'おもろんだな'
    },
    {
        id: uuidv4(),
        username:'suzuki',
        comment: 'こたにさーん'
    },
    {
        id: uuidv4(),
        username:'otani',
        comment: 'おーたにさーん'
    },
    {
        id: uuidv4(),
        username:'nakatani',
        comment: 'だよなンゴ」'
    },
    {
        id: uuidv4(),
        username:'ねっこ',
        comment: 'ばうばうわんわん'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments:comments, id: uuidv4()});
});

app.get('/comments/new', (req,res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    // {username:username, comment:comment}の省略;
    // res.send('良さげだべ');
    //getリクエストを投げる
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;//paramsから取得するとStringになる。
    const comment =  comments.find( c => c.id === id );
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;//paramsから取得するとStringになる。
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req,res) => {
    const { id } = req.params;
    //filterメソッドでidと一致しないものだけでフィルタし、commentsに入れ直す。（一致するものは削除される。）
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req,res) => {
    res.send('GET /tacos response');
});
app.post('/tacos', (req,res) => {
    const {meat,qty} = (req.body);
    res.send('POST /tacos response'+` ${qty}個の${meat}どうぞ`);
});

app.listen(3000, () => {
    console.log('ポート3000だべ');
})

// GET /coments - コメント一覧を取得
// POST /coments - 新しいコメントを作成
// GET /coments/:id - 特定のコメントを一つ取得
// PATCH /coments/:id - 特定のコメントを更新
// DELETE /coments/:id - 特定のコメントを削除