import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2"
import ReacQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const FormComponent=()=>{

  const [blog,setBlogs] = useState({
    title:"",
    author:""
  })

  const [content , setContent] = useState('')

  const { title ,author} = blog

  //กำหนดค่าให้ blog
  const inputValue=name=>event=>{
    setBlogs({...blog,[name]:event.target.value})
  }

  const submitContent=(event)=>{
    setContent(event)

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
      setBlogs({title:'',author:''}
      )
      setContent({content:''})
    
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
          <ReacQuill 
          value={content}
          onChange={submitContent}
          theme='snow'
          className="pb-5 mb-3"
          placeholder="เขียนรายละเอียดบทความของคุณ"
          style={{border : '1px solid'}}
          />
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