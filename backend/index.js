import express  from "express"
import mysql  from "mysql"


const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"jebossela",
  database:"mes_livres"
})

app.get("/", (req,res)=>{
  res.json("hello this is the backend")
})


app.listen(8800, ()=>{
  console.log("Connected to backend!")
})