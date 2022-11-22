import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  let [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  let [name, setName] = useState("Mario");

  

  useEffect(() => {
    // You cannot use async inside useEffect unless it is declared within another function. Don't know why! Otherwise you have to use .then/.catch.
    async function getBlogs() {
      let response = await fetch('http://localhost:8000/blogs');
      let data = await response.json();
      console.log(data);
      setBlogs(data);
      setIsPending(false);
    }

    setTimeout(getBlogs, 1000);
  }, []); 

  return ( 
    <div className="home">
      <button onClick={()=>(setName("Brenton"))}>Change name</button>
      { isPending && <div>Loading...</div> }
      { // Use this AND conditional operator so that it does not try to output the bloglist UNTIL the 'blogs' value exists.
        blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
   );
}
 
export default Home;