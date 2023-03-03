const blogModle = require('../models/model')
const slugify = require('slugify')


//ดึงบทความ
const getData = async (req,res)=>{    
    try {
    const blogs = await blogModle.find({})
        res.json(blogs);
    } catch (error) {
        res.json({error:error.message})
    }
}

//ดึงบทความ Slug
const getSlug = async (req,res)=>{
    try {
      const {slug} = req.params
      const blog = await blogModle.findOne({slug});
      res.json(blog); 
        
    } catch (error) {
        res.json({error:error.message})
    }
}


//สร้างบทความ
const createData = async (req,res)=>{
   const { title , content , author} = req.body
   const slug = slugify(title)
   
   //ตรวจสอบความถูกต้องของข้อมูล 
   switch(true){
    case !title :
        return res.status(400).json({error:"กรุณาป้อนชื่อบทความ"})
        break;
    case !content :
        return res.status(400).json({error:"กรุณาป้อนเนื้อหาบทความ"})
        break;
   }

   try {
    const blog = await blogModle.create({title,content,author,slug})
    res.status(200).json({message:"Post Completed"})
   } catch (error) {
    res.status(400).json({error:"บทความซ้ำกัน"})
   }
}







module.exports = {getData ,createData , getSlug}