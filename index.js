const express= require('express')
const app= express()
const db= require("./app/models/index")
const {getPosts}=require("./app/controllers/getPosts")
app.use(express.json())//send and recieve json data
app.use(express.urlencoded({extended:true})) //eeceive query parameters

app.get("/", (req, res)=>{
    console.log(typeof db.posts)
res.json({message:"welcome to sequelize"})
})
app.get("/posts",getPosts)
const port=5500
db.sequelize.sync().then(()=>{
    console.log("synced db")
    app.listen(port, ()=>{console.log("server runningg")})
}).catch((error)=>{
    console.log(`something went wrong ! ${error}`)
})

