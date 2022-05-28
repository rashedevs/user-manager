import React, { FormEvent, useState } from 'react';

interface User{
    name:string,
    job:string
}

const Counter = () => {
    const [counter, setCounter]=useState<number>(0)
    const [user,setUser]=useState<User|null>(null)
    const handleIncrease=():void=>{
setCounter(counter+1)
    }
    const handleDecrease=():void=>{
setCounter(counter-1)
    }
    const handleUserSubmit=(e:FormEvent)=>{
        e.preventDefault()
        const userData={
            name:'Adam',
            job:'Developer'
        }
        setUser(userData)
    }
    return (
        <div>
            <h1>Hello Counter</h1>
            <h2>Result: {counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;