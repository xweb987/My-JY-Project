//导入
const express = require("express");
const app = express();
//自定义的中间件接受post数据
const csBodyParse = require("./middlewares/csBodyParse");
app.use(csBodyParse);
//路由
app.post("/post",(req,res)=>{
    console.log(req.body);
})
//启动
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})