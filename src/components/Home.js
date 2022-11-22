import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {

  // Note the data: blogs, which renames the data from useFetch to blogs.
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

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