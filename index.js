import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    console.log(`Express vercel app`);
})

app.listen(4000,(req,res)=>{
    console.log(`server is running at 4000`);
})