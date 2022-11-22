import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  // Name the paramter based on the colon format from the router.
  const { id } = useParams();

  return ( 
    <div className="blogdetails">
      <h2>Blog Details - { id }</h2>
    </div>
  );
}
 
export default BlogDetails;