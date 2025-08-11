import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const load= async ()=>{
    const res=await fetch('http://localhost:3000/blogs/1');
    const data=await res.json();
    console.log(data);
    
  }
  useEffect(()=>{
    load();
  },[]);
  return (
    <div>
      <h1>Blogs</h1>
      <hr />
      <Link to='create/'>Create</Link>
      <ol>
        <li>
          <Link to='1/'>My First Blog</Link>
        </li>
      </ol>
    </div>
  );
}
