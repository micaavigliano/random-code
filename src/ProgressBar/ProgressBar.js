import { useEffect, useState } from "react";
import './ProgressBar.css'

const ProgressBar = () => {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState()
  const min = 5;
  const max = 6;
  const api = (Math.floor(Math.random() * (max - min + 1)) + min);

  useEffect(() => {
    // const seconds = minutes * 60; // de minutos a segundos
    const seconds = api
    setSeconds(seconds)
    console.log({ minutes: api, seconds })


    const interval = setInterval(() => {
      setCount((oldValue) => {
        const newValue = oldValue + 1;
        console.log({ newValue })

        if (newValue === seconds) {
          console.log('bye')
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  return (
    <div>
      <img src="https://media.giphy.com/media/3o6MbhpKReYen8pnCo/giphy.gif" alt="" />
      <progress max={seconds} value={count} />
    </div>
  );
}

export default ProgressBar;
