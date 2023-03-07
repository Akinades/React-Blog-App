import axios from "axios";
import React,{ useState, useEffect } from "react";
import Navbar from "./Navbar";
import HtmlToReact from 'html-to-react';

const SigleComponent=(props)=>{

   const parser = new HtmlToReact.Parser();
   
    const [blog , setblog] = useState('')
    
    useEffect(()=>{
         axios.get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
         .then(response=>{
            setblog(response.data)
         })
         .catch(err=>alert(err))
         // eslint-disable-next-line
    },[])
    return (
       <div className="container p-5">
        <Navbar/>
         <h1>{blog.title}</h1>
         <p>{parser.parse(blog.content)}</p>
         <p className="text-muted">ผู้เขียน : {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
       </div>
    )
}

export default SigleComponent ; 