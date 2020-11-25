const express = require('express');
const app = express();
app.get("/get",(req,res)=>{
    res.send("get请求");
})
app.post("/post",(req,res)=>{
    res.send("post请求");
})
app.put("/put",(req,res)=>{
    res.send("put请求");
})
app.delete("/delete",(req,res)=>{
    res.send("delete请求");
})
//启动服务
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})