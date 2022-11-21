import { useState } from 'react';

const Home = () => {
  // We have to useState hooks to update reactive values in our component to
  // make the page re-render.
  
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = (event) => {
    setName("Luigi");
    setAge(age+1);
  };

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>Your name: { name }</p>
      <p>Your age: { age }</p>
      <button onClick={handleClick}>Click me.</button>
    </div>
   );
}
 
export default Home;