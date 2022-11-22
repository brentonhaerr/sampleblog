import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  // Name the paramter based on the colon format from the router.
  const { id } = useParams();
  const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);

  return ( 
    <div className="blogdetails">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button>Sample Button</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;