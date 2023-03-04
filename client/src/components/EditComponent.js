import React, { useState , useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2"
const EditComponent=(props)=>{
  
  const [blog,setBlogs] = useState({
    title:"",
    content:"",
    author:"",
    slug:""
  })
  const { title , content ,author,slug} = blog
  
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
    .then(response=>{
       const {title,content, author ,slug} = response.data
       setBlogs({...blog,title,content,author , slug})
    })
    .catch(err=>alert(err))
    // eslint-disable-next-line
},[])
  //กำหนดค่าให้ blog
  const inputValue=name=>event=>{
    setBlogs({...blog,[name]:event.target.value})
  }
  
  //ส่งข้อมูล API
  const submitData=(event)=>{
    event.preventDefault();
    console.log("API URL",process.env.REACT_APP_API)
    axios.put(`${process.env.REACT_APP_API}/blog/${slug}`, {title,content,author})
    .then(response=>{
      Swal.fire(
        'แจ้งเตือน',
        "แก้ไขข้อมูลเรียบร้อย",
        'success'
      )
      // const  {title,content,author,slug} = response.data
    
    })
    .catch(err=>{
      Swal.fire(
        'แจ้งเตือน',
        err.response.data.error,
        'error'
      )
    })
  }
  
return(
        <div className="container p-5">
          <Navbar/>
        <h1>แก้ไขบทความ</h1>
        <form onSubmit={submitData}>
          <div className="form-group">
            <label>ชื่อบทความ</label>
            <input type="text" className="form-control" value={title} onChange={inputValue("title")}/>
          </div>
          <div className="form-group">
            <label>รายละเอียด</label>
           <textarea className="form-control" value={content} onChange={inputValue("content")}></textarea>
          </div>
          <div className="form-group">
            <label>ผู้แต่ง</label>
            <input type="text" className="form-control" value={author} onChange={inputValue("author")}/>
          </div>
          <br/>
          <input type="submit" value="บันทึก" className="btn btn-primary"/>
          
        </form>
      </div>
    )
   
}

export default EditComponent; 