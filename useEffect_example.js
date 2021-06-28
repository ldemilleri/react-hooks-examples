import {useEffect, useState} from 'react';

function Btn() {
  
  const [count, setCount] = useState(0);
  //The useEffect Hook serves to replace the lifecycle mehtods traditionally used in class based components
  // it takes a function as a parameter, which will be executed either when mounting, when updating and mounting or when unmounting
  useEffect( () => {
    console.log("This will run on any state change and when mounting");  
  });
  useEffect( () => {
    console.log("This will run when mounting");  
  }, []);
  useEffect( () => {
    console.log("This will run only when count is updated");  
  }, [count]);
  useEffect( () => {
    return () => {
      console.log("This will run when unmounting");  
    }
  });
  
  return ();
}
