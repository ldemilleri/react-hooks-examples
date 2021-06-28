import {useRef} from 'react';

function App(props) {
  
  const count = useRef(null);
  
  const click = () => count.current.click();
  return (
    <button ref=count/>
  );
} 
