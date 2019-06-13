var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var ejwt = require('express-jwt');
var unless = require('express-unless');
var config = require('./config/basic');


var ejwtopt = ejwt(config.token);
// ejwtopt.unless = unless;
app.use(ejwtopt.unless(config.unless));

app.post('/login', function (req, res) {
    console.log('login', req.query);
    //得到用户上传的用户名跟密码
    var username = req.body.username;
    var password = req.body.password;
    var results = "";//用于给客户端传输结果
    //拿到用户名密码进行数据库比对执行SQL语句返回result结果(此处省略mysql)result中包含用户类型（管理员端/用户端）
    //拿到结果进行判断
    if(result != null){
        // 生成token返回给前端，前端存储到localStorage，之后访问除了login接口都要携带token
        const token = jwt.sign({
            username: result.username,  //记录用户名称
            type: result.type   //此处记录用户的类型区别用户端还是管理员端(数据库存储类型)
        }, config.token.secret, { expiresIn: config.token.expiresIn })
        results = {
            code: '1',
            data: token,
            msg: '登录成功'
        };
    }else{
        results = {
            code: '0',
            data: null,
            msg: '账号或密码错误'
        };
        }
    //向客户端发送结果，客户端解析results
    res.send(results);
})

app.get('/set', function (req, res) {
    console.log('set', req.query);

    // query里面包含token
    var query = req.query;
    var token = req.authToken;
    // 解析出来之后：
    // exp:1560438828
    // iat:1560352428
    // type:"***"
    // username:"***"
    
    //判断token.type即可知道用户身份从而显示不同类型内容

})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})