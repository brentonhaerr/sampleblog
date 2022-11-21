import { useState } from 'react';

const Home = () => {
  let [blogs, setBlogs] = useState([
    {title: 'Lorem, ipsum dolor.', body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi soluta, earum quia corrupti velit officiis.", author: "Brenton", id: 1},
    {title: 'Lorem, ipsum.', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odit quis nesciunt at modi deleniti numquam ad obcaecati accusamus! Accusantium explicabo repellat nam.", author: "Brenton", id: 2},
    {title: 'Lorem ipsum dolor sit.', body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro dicta facilis qui sint natus eius consectetur. Ea saepe sint quas eos!", author: "Christy", id: 3},
  ]);
  return ( 
    <div className="home">
      { blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      )) }
    </div>
   );
}
 
export default Home;