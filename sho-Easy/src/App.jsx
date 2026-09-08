import {useState, useEffect,useCallback,useRef} from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
function UseRefEx(){
  const inputRef = useRef();
  function focusInput(){
    inputRef.current.focus();
  }
  return (
    <>
    <input ref={inputRef}/>
    <button onClick={focusInput}>Focus</button>
    </>
  )
}
function UseCallBack(){
   const [count, setCount]= useState(0);
   const showMessage = useCallback(()=>{
    console.log("Count is : ",count);
   });
   return (
    <>
    <h2>Count : {count}</h2>
    <button onClick={()=>setCount(count + 1)}>Increase Count</button>
    <button onClick={showMessage}>Show Message</button>
    </>
   )
}
function UseMemoEx(){
     const [count, setCount]= useState(0);
     const [number, setNumber] = useState(5);
     const square = useMemo(()=>{
      console.log("Calculating square...");
      return number * number;
     },[number]);
     function changeNum(){
      setCount(count + 1)
     }
     function changeSq(){
      setNumber(number + 1)
     }
     return(
      <>
         <h2>Count : {count}</h2>
        <h2>Number : {number}</h2>
        <h2>Square : {square}</h2>
        <button onClick={changeNum}>Increase Count</button>
        <button onClick={changeSq}>Increase Number</button>
      </>
     )
}
function UseEffectDemo(){
   const [count, setCount] = useState(0);
   const[isOn,setIsOn] = useState(false);
    function increase(){
      setCount(count + 1);
    }
    function setStatus(){
        setIsOn(!isOn);
      }
    useEffect(()=>{
      document.title = `Count : ${count}`;
    },[isOn])
    return (
      <>
        <p>Count : {count}</p>
        <button onClick={increase}>Increase</button>
        <p>
      Status : {isOn ? "ON" : "OFF"}
      <button onClick={setStatus}>Change Status</button>
        </p>
      </>
    )
}
function UserStateDemo(){
      const [count, setCount] = useState(0);
      const[isOn,setIsOn] = useState(false);
      function setStatus(){
        setIsOn(!isOn);
      }
  function increment(){
    setCount(count + 1);
    console.log("Counter = ",count);
  }
  return (
  <>
    <h1>This is from UserStateDemo Component</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>increase</button>
     <p>
      Status : {isOn ? "ON" : "OFF"}
      <button onClick={setStatus}>Change Status</button>
     </p>
    </>
  )
}
function Person({name,course}){


  return(
    <>
    <h1>This is from Person Component</h1>
    <Student name={name} course= {course}/>
    </>
  )
}
function Student(details){
  return (
    <>

    <h1>Student Details</h1>
    <h2>{details.name}</h2>
    <h2>{details.course}</h2>
    </>
  )
}
function App() {
  let name= "Gazi S";
  return (
    <>
    <UseRefEx />
    <Person name={name} course="CSE"/>
  
    <Header />
    <Hero />
    <Categories />
    <ProductList />
    
    </>
  )
}
export default App
