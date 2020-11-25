const express = require('express');
//导入路由模块
const frontend = require('./routers/frontend');
const backend = require('./routers/backend');
const app = express();
//路由
app.use("/frontend",frontend);
app.use(backend);
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})