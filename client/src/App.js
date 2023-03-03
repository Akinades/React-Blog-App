import Navbar from "./components/Navbar";
import axios from "axios"; 
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [blogs,setBlogs] = useState([])

  const fetchData=()=>{
    axios.get(`${process.env.REACT_APP_API}/blogs`)
    .then(response=>{
      setBlogs(response.data)
    })
    .catch(err=>alert(err));
  }
  useEffect(()=>{
      fetchData();
  },[])
  return (
    <div className="container">
      <Navbar/>
      {blogs && blogs.map((blog)=>(
        <div className="row" key={blog._id} style={{borderBottom : "1px solid silver"}}>
          <div className="col pt-3 pb-2">
            <Link to={`blog/${blog.slug}`}>
            <h2>{blog.title}</h2>
            </Link>
            <p>{blog.content.substring(0,100) + "..."}</p>
            <p className="text-muted">ผู้เขียน : {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
            </div>

        </div>
      ))}
    </div>
  );
}

export default App;
