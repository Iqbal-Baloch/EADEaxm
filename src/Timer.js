import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Timer() {
    const [count, setcount] = useState(10);
    const [isTimeFnished, setisTimeFnished ] = useState(false);
    useEffect(() => {
        const ticker = setTimeout(() => {
            setcount(prev => prev-1) ;
        }, 1000);
        if(count===0){
            setisTimeFnished(true);
            clearInterval(ticker)
        }
    }, [count]);

    return (
        <div className='timerclass'>
            {isTimeFnished? <h2>Time's up!</h2> : <h1>{count}</h1>}
        </div>
    )
}