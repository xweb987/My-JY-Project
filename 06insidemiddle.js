
const express = require("express");
const app = express();

//使用post接受的中间件
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.use(express.json());
app.post(express.json(),(req,res)=>{
    console.log(req.body);
});
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
}) 