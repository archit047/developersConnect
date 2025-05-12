const express = require("express");

const app = express();

// GET /users => middlewares chain => request handler
app.use("/",(req,res,next)=>{
    // res.send("handling / route")
console.log("handling the route user!!");
next();
});

app.get("/user",(req,res,next)=>{
    console.log("Handling /user route");
    next();
},
(req,res,next)=>{
    res.send("1st route handler");
},
(req,res,next)=>{
    res.send("2nd route handler");
});
// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Akshay",lastName:"Saini"})
// });

// app.post("/user",(req,res)=>{
//     res.send("Data succesfully saved to the database!");
// })

// app.use("/test",(req,res)=>{
//     res.send("from the server!");
// });

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});  