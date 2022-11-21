const Home = () => {

  // All onClick events receive the event as their first argument.
  const handleClick = (event) => {
    console.log("Hello ninjas.", event);
  };

  const handleClickAgain = (name) => {
    console.log("Hello " + name)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me.</button>
      <button onClick={(event)=>{handleClickAgain('mario'); console.log(event)}}>Click me, too.</button>
    </div>
   );
}
 
export default Home;