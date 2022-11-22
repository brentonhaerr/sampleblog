import { useEffect, useState } from 'react';

// Custom hooks must start with use.
/**
 * @param {string} url 
 * @returns {} { data, isPending, error }
 */
function useFetch(url) {
  let [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // You cannot use async inside useEffect unless it is declared within another function. Don't know why! Otherwise you have to use .then/.catch.
    async function getBlogs() {
      try {
        let response = await fetch(url);
        console.log(response);
        if (!response.ok) throw "Fetch error.";
        let data = await response.json();
        console.log(data);
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (e) {
        console.log(e);
        setError(e);
        setIsPending(false);
      }
      return (() => console.log("Hello"));
    }

    getBlogs();
    
  }, []); 

  return {data, isPending, error};
}

export default useFetch;