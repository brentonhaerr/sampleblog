
  // These props are passed when the component is called in another area. They are given in a name=value format, like HTML.
// const BlogList = (props) => {
//   const blogs = props.blogs; 
//   const title = props.title;

// This is an alternate way of titling the component to get access to two of
// the props.
const BlogList = ({ title, blogs }) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      { blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      )) }
    </div>
  );
}
 
export default BlogList;