import { useRef, useState } from 'react'

const StopWatch = () =>{
    // let interval;
    const [milliSec, setMilliSec] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const intervalID = useRef();

    const startMilliClock = () => {
        intervalID.current = setInterval(()=>{
            setMilliSec((prevValue) => {
                (prevValue>=59) ? prevValue = 0:  prevValue = prevValue+1;
                return prevValue;
            });
        }, 1000);
    }

    const stopMilliClock = () => {
        clearInterval(intervalID.current);
    }

    return(
        <div className="stopWatch">
            <h1>StopWatch</h1>
            <div className="watch">
                <div className="time hour">{ milliSec }</div>
                <div className="colon"><strong>:</strong></div>
                <div className="time min">{ milliSec }</div>
                <div className="colon"><strong>:</strong></div>
                <div className="time sec">{ milliSec }</div>
                <div className="colon"><strong>:</strong></div>
                <div className="time mil-sec">{ milliSec }</div>
            </div>
            <div className="buttons">
                <button onClick={ startMilliClock }>Start</button>
                <button>Lap</button>
                <button onClick={ stopMilliClock }>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;


/*function pad2(number) {
            return (number < 10 ? '0' : '') + number
         } */