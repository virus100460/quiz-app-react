import { useEffect, useState } from "react";

export default function QuestionTimer ({ timeout, onTimeout, mode}){

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect (() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }

    }, [timeout, onTimeout]);
    

    useEffect (() => {
      const internal = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        },100);

        return () => {
            clearInterval(internal);
        }
    }, []);
    

    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
    );
}