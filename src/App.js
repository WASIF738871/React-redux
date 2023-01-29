
import React from 'react';
import './App.css';
import { incNumber, decNumber } from './actions/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const myState = useSelector((state)=>{ return state.changeTheNumber})
  const dispatch = useDispatch();

  return (
    <div className="App">
     <div className="container">
      <div className="container_outer">
        <h1>Increment/Decrement counter</h1>

        <div className="container_inner">
          <h3>using React and Redux</h3>
          <div className="container_btn">
            <button onClick = {()=>dispatch(decNumber())}>-</button>
            <p>{myState}</p>
            <button onClick = {()=>dispatch(incNumber())} >+</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
