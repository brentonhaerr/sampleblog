import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  let [blogs, setBlogs] = useState();

  let [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    let newBlogs = blogs.filter((blog) => (blog.id != id));
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    
  }, [name]); 

  return ( 
    <div className="home">
      <button onClick={()=>(setName("Brenton"))}>Change name</button>
     
    </div>
   );
}
 
export default Home;