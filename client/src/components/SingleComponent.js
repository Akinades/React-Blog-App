import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
const SigleComponent=(props)=>{
    const [blog , setblog] = useState('')
    
    useEffect(()=>{
         axios.get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
         .then(response=>{
            setblog(response.data)
         })
         .catch(err=>alert(err))
    },[])
    return (
       <div className="container p-5">
        <Navbar/>
         <h1>{blog.title}</h1>
         <p>{blog.content}</p>
       </div>
    )
}

export default SigleComponent ; 