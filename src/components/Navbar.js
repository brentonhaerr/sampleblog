import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>DojoBlog</h1>
      <div className="links">
        {/* Adding Link tags and the to= value means that the request is handled just via react-router and does not hit the server. Smart! */}
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: "white", 
          backgroundColor: "#f1356d", 
          borderRadius: "8px" 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;