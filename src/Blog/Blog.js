
import React from 'react';
import  Post from "../components/Post/Post.js";
import Fullpost from '../components/Fullpost/Fullpost.js';
import './Blog.css';
import Newpost from '../components/Newpost/Newpost';
const Blog =()=>{

 return(
     <div className="Blog">

   
     <div className="Blogpost">
         <Post/>
         <Post/>
         <Post/>
     </div>
    
     <div className="Blogfullpost">
         <Fullpost/>
       </div>
     <div className="Blognewpost">
         <Newpost/>
     </div>

     </div>


 );
};
export default Blog;