const express = require("express");

const app = express();

app.use("/test/2",(req,res)=>{
    res.send("test 22 from the server");
});

app.use("/test",(req,res)=>{
    res.send("test from the server");
});

app.use("/hello",(req,res)=>{
    res.send("Hello from the server");
});

app.use("/",(req,res)=>{
    res.send("from the server");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});  