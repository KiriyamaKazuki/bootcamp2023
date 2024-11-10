const express = require('express');
const app = express();

//リクエストが来た際の挙動
//app.useはすべてのリクエストに対して実行される
//sendが実行されてしまうため。→httpのリクエストに対しては一つのレスポンスしか返せない。

// app.use((req, res) => {
//     console.log('リクエスト受付');
//     res.send({testman: 'appou'});
// });

app.get('/cats', (req, res) => {
    console.log('猫にリクエスト受付');
    res.send('にゃにゃん');
});

app.post('/cats', (req, res) => {
    res.send('猫のポストだべ');
});

app.get('/', (req, res) => {
    res.send('ルートパスです');
});

// :を使用することで可変にすることができる
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>${subreddit}</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>${subreddit}のPOSTID${postId}ページだ</h1>`);
});

// クエリストリングもexpressが自動でqueryに格納してくれる
// 記述例http://localhost:3000/search?q=aaa
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>${q}の検索結果でっさ</h1>`);
});

// どんなパスでも引っかかる（意図しないURLにアクセスされたときなどに使用）
// ルーティングは上から順にマッチするか見られるので、*は下のほうに記述する。
app.get('*', (req, res) => {
    res.send('無効なパスです');
});

//サーバーの起動
app.listen(3000, () => {
    console.log('3000で待ち');
});