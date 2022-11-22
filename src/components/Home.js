import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  let [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  let [name, setName] = useState("Mario");

  

  useEffect(() => {
    // You cannot use async inside useEffect unless it is declared within another function. Don't know why! Otherwise you have to use .then/.catch.
    async function getBlogs() {
      try {
        let response = await fetch('http://localhost:8000/blogs');
        console.log(response);
        if (!response.ok) throw "Fetch error.";
        let data = await response.json();
        console.log(data);
        setBlogs(data);
        setError(null);
        setIsPending(false);
      } catch (e) {
        console.log(e);
        setError(e);
        setIsPending(false);
      }
    }

    setTimeout(getBlogs, 1000);
  }, []); 

  return ( 
    <div className="home">
      { isPending && <div>Loading...</div> }
      { // Use this AND conditional operator so that it does not try to output the bloglist UNTIL the 'blogs' value exists.
        blogs && <BlogList blogs={blogs} title="All blogs" />}
        {error && <div>Error: {error}</div>}
    </div>
   );
}
 
export default Home;