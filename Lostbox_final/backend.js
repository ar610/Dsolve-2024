const express=require("express");
const http=require('http');



const app=express();
app.use(express.json());

app.post("/details",(req,res)=>{
    console.log("Hello World");
});
const server=http.createServer(app);
server.listen(8080,()=>{
    console.log("listerning");
})