const db= require("../models/index")
const POST= db.posts


const getPosts= async (req, res)=>{
try{
    const posts= await POST.findAll()
  return  res.status(200).send(posts)
}
catch(error){
return res.status(500).send(error.message)
}
}
module.exports={getPosts}