import {useState} from 'react'
import './App.css'

const App = () => {
  const [result,setResult]= useState("");

  const update = (event)=>{
   
setResult(result.concat(event));
  }

  const clear=(event) =>{
setResult(event);
  }
  const calculate = (result)=>{
    
setResult(eval(result).toString());

  }
  return (
   <div>
     <div className="App">
       <div className="Calculator">
         <input type="text" className="display" size='60' placeholder="0" value={result}/>
         <div className="buttons">
<div className="operations">
<button onClick={()=>{update('/')}}>/</button>
<button onClick={()=>{update('*')}}>*</button>
<button onClick={()=>{update('-')}}>-</button>
<button onClick={()=>{update('+')}}>+</button>
<button onClick={()=>{clear('')}}>DEL</button>
</div>
<div className="digits">
  <button onClick={()=>{update('1')}}>1</button>
  <button onClick={()=>{update('2')}}>2</button>
  <button onClick={()=>{update('3')}}>3</button>
  <button onClick={()=>{update('4')}}>4</button>
  <button onClick={()=>{update('5')}}>5</button>
  <button onClick={()=>{update('6')}}>6</button>
  <button onClick={()=>{update('7')}}>7</button>
  <button onClick={()=>{update('8')}}>8</button>
  <button onClick={()=>{update('9')}}>9</button>
  <button className="end" onClick={()=>{update('0')}}>0</button>
  <button className="end" onClick={()=>{update('.')}}>.</button>
  <button className="end" onClick={()=>{calculate(result)}}>=</button>
  
</div>
         </div>
       </div>
     </div>
     <h1>{eval('2+3').toString()}</h1>
   </div>
  )
}

export default App