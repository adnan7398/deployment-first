import   express from "express";
import {client} from "@repo/db/client"
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hi there");
})

app.post("/signin",(req,res)=>{
    const username  = req.body.username ; 
    const password = req.body.password;

   const user =  client.user.create({
        data:{
            username:username,
            password:password
        }
    })

})


