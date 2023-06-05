import React from 'react'
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';
function App() {
  return(
    <>
    <h1>Convert those Currencys</h1>
    <CurrencyRow/>
    <div className='equals'> = </div>
    <CurrencyRow />
    </>
  );
  
}

export default App;
