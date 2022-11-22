import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  let [blogs, setBlogs] = useState([
    {title: 'Lorem, ipsum dolor.', body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi soluta, earum quia corrupti velit officiis.", author: "Brenton", id: 1},
    {title: 'Lorem, ipsum.', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odit quis nesciunt at modi deleniti numquam ad obcaecati accusamus! Accusantium explicabo repellat nam.", author: "Brenton", id: 2},
    {title: 'Lorem ipsum dolor sit.', body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro dicta facilis qui sint natus eius consectetur. Ea saepe sint quas eos!", author: "Christy", id: 3},
  ]);

  const handleDelete = (id) => {
    let newBlogs = blogs.filter((blog) => (blog.id != id));
    setBlogs(newBlogs);
  }

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete } />
      <BlogList blogs={ blogs.filter((blog)=>(blog.author=="Brenton")) } title="Brenton Blogs" handleDelete={ handleDelete } />
    </div>
   );
}
 
export default Home;