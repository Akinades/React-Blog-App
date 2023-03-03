import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2"
const FormComponent=()=>{

  const [blog,setBlogs] = useState({
    title:"",
    content:"",
    author:""
  })
  const { title , content ,author} = blog

  //กำหนดค่าให้ blog
  const inputValue=name=>event=>{
    setBlogs({...blog,[name]:event.target.value})
  }

  //ส่งข้อมูล API
  const submitData=(event)=>{
    event.preventDefault();
    console.log("API URL",process.env.REACT_APP_API)
    axios.post(`${process.env.REACT_APP_API}/create` , { title , content ,author} )
    .then(response=>{
      Swal.fire(
        'แจ้งเตือน',
        "บันทึกบทความเรียบร้อย",
        'success'

      )
      setBlogs(
        {
          title:'',
          content:'',
          author:''
        }
      )
    
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
        <h1>เขียนบทความ</h1>
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

export default FormComponent; 