# express-jwt
使用express-jwt与jsonwebtoken实现用户登录鉴权功能
对于您那边说的持久化存储这块，不知道指的是服务器端还是客户端，这块不是很清楚。
客户端的话需要存放在localStorage中
服务器的话我测试一下，重启服务器也是可以接收token并进行解密的。

代码中关于mysql部分没有给出，只是进行伪代码展示。

