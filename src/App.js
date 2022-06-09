import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import Dashboard from './layouts/Dashboard';
function App() {
  function Deneme(){
    const shoot = ()=>{
      alert("ne basıyon lan ibine")

    }
    return <button onClick={shoot}>Take the shot!</button>;
  }  
  class Deneme2 extends React.Component {
    render(){
      return (
        <Nav.Link as={Link} to="/Main">Yerleşkeler</Nav.Link>
      )
    }
  }
  function ForProps(props){
    return <p>{props.color} deneme props</p>
  }
  function IfDeneme(props){
    const isGoal = props.isGoal;
    if(isGoal){
      return <p>gol oldu lan mal</p>;
    }else{
      return <p>enayi kaçırdı ya</p>
    }
  }
  function DahaGuzelIf(props){
    const isGoal = props.isGoal;
    return <>
    {isGoal? <p>gol oldu lan daha güzle</p>: <p>gol kaçtı lan mal daha güzel</p>}
    </>
  }
  function Car(props){
    return <li>{props.name}</li>
  }
  function Liste(){
    const cars = [
      {id: 1, name: 'Ford'},
      {id: 2, name: 'BMW'},
      {id: 3, name: 'Audi'}
    ];
    return(
      <ul>
        {cars.map((car)=><Car key={car.id} name={car.name}/>)}
      </ul>
    );
  }
  function FormDeneme(){
    const [name, setname] = useState("");
    const handleSubmit = (e)=>{
      e.preventDefault();
      alert(`girilen isim: ${name}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          isim :
          <input  
          type="text"
          value={name}
          onChange={(e)=>setname(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }
  //  HOOK
  function FavColor(){
    const [color, setcolor] = useState("red")
    // muhakkak fonksyion içinde yazılmalı. en üstte olmalı
    return(
      <>
      <h1>ilk okunan color: {color}</h1>
      <button type='button' onClick={()=>setcolor("mavi")}> mavi</button>
      <button type='button' onClick={()=>setcolor("sarı")}> sarı</button>
      <button type='button' onClick={()=>setcolor("siyah")}> siyah</button>
      </>
    )
  } 
  //USE EFFECT
  function UseEffectUse(){
    const [sayi, setsayi] = useState(0)
    useEffect(() => {
      setTimeout(()=>{
        setsayi((sayi)=>sayi+1)
      },1000)
    }, [])
    return <h1>render sayısı: {sayi}</h1>
    
  }
  return (
    <div className="App">
      <Deneme/>
      <Deneme2/>
      <ForProps color="kırmızı"/>
      <IfDeneme isGoal={false}/>
      <DahaGuzelIf isGoal={false}/>
      <Liste/>
      <FormDeneme/>
      <Dashboard/>
      <FavColor/>
      <UseEffectUse/>
    </div>
  );
}

export default App;
