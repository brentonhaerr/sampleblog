import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  let [blogs, setBlogs] = useState([
    {title: 'Lorem, ipsum dolor.', body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi soluta, earum quia corrupti velit officiis.", author: "Brenton", id: 1},
    {title: 'Lorem, ipsum.', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odit quis nesciunt at modi deleniti numquam ad obcaecati accusamus! Accusantium explicabo repellat nam.", author: "Brenton", id: 2},
    {title: 'Lorem ipsum dolor sit.', body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro dicta facilis qui sint natus eius consectetur. Ea saepe sint quas eos!", author: "Christy", id: 3},
  ]);

  let [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    let newBlogs = blogs.filter((blog) => (blog.id != id));
    setBlogs(newBlogs);
  }

  // Any function in useEffect will trigger when the dom rerenders.
  // Basically, on first load and when state changes. Either initial
  // load or when the blogs are deleted, in this case.
  // You should not generally change state in useEffect because it 
  // can loop.
  useEffect(()=>{
    alert("useEffect");
  // }, []); Adding an empty array here means useEffect only triggers on first load.
  }, [name]); // Adding a value here means useEffect only triggers on first load AND when that value changes. Only triggers if the value actually changes, not just if it is set to the same value.

  return ( 
    <div className="home">
      <button onClick={()=>(setName("Brenton"))}>Change name</button>
      <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete } />
      <BlogList blogs={ blogs.filter((blog)=>(blog.author=="Brenton")) } title="Brenton Blogs" handleDelete={ handleDelete } />
    </div>
   );
}
 
export default Home;