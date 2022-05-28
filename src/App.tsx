import React from 'react';
import './App.css';
import Counter from './components/Counter';

let student:string = 'Johny Depp';
let age:number=55;
let isSmart:boolean=true;

let students:string[] = ['Rashed','Zaman','Raju'];
let fees:number[] = [12,13,14,15];


interface Person{name:string,age:number,married?:boolean, locattion?:string | number}

const person:Person = {
  name:'X',
  age:18,
  // married:false,
  locattion:55
}

const handleScripts=(name:string,number:number,address:string):void=>{
  const total:number=50;
console.log(name,address,number)
// return total;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
