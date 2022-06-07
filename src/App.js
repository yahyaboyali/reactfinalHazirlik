import React from 'react';
import './App.css';
function App() {
  function Deneme(){
    const shoot = ()=>{
      alert("ne basıyon lan ibine")

    }
    return <button onClick={shoot}>Take the shot!</button>;
  }  
  class Deneme2 extends React.Component {
    render(){
      return <p>deneme2</p>
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
  return (
    <div className="App">
      <Deneme/>
      <Deneme2/>
      <ForProps color="kırmızı"/>
      <IfDeneme isGoal={false}/>
      <DahaGuzelIf isGoal={false}/>
      <Liste name={["de","dee"]}/>
    </div>
  );
}

export default App;
