//カスタムモジュール読み込み
const db = require('./lib/db');

//DB接続　(カスタムモジュールを利用)
const con = db.connect();

//SELECT
let sql = 'SELECT * FROM users;'
con.query(sql,(err,results)=>{
    results.forEach((user)=>{
        console.log(user.email);
    });
});

const user_id=1;
sql = 'SELECT * FROM users WHERE id=' + user_id +';';
con.query(sql,(err,results)=>{
    console.log(sql);
    let user = results[0];
    if (user) console.log(user.email);
});


//DB接続終了
con.end();