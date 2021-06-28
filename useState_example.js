import { useState } from 'react';

function App(){
  // useState is used to initialize the state of the application, which can then be passed on to children, and can be update through the setState() function it returns
  // useState takes the initial state of the function as it parameter. Using the useState hook simplifies the complexity of the code base allowing for components to be functions insted of classes, that need constructors 
  const [ state, setState ] = useState({count: 0}); 
  
  return (
  <button onClick={ () => {setState(count + 1)}}> 
    {count} 
  </button>
  );
}
