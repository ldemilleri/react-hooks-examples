import 

const someDataToBeReusedTroughoutTheApp = {
  something: 'dvorak',
  other: 'qwert'
}

const context = createContext(someDataToBeReusedTroughoutTheApp);

function App(props) {
  return (
    <context.Provider value={someDataToBeReusedTroughoutTheApp.something}> //
      <child/>
    </context.Provider>
  );
}

function child() {
  //this child inherits which data to use from its parent providers' context 
  const data = useContext(context);
  return <p>{mood}</p>;
}
