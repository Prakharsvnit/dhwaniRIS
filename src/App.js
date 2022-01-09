import React,{useState} from 'react';
import './App.css';
import InputBoxes from './Component/InputBoxes';

function App() {
  const [value,setValue] = useState("")
  return (
    <>
    <div className="App">
      <InputBoxes length={4} perBox={4} onChange={(val)=> setValue(val) }/>
    </div>
      <h3>{value}</h3>
    </>
  );
}

export default App;
