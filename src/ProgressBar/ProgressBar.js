import { useEffect, useState } from "react";
import './ProgressBar.css'

const ProgressBar = () => {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState()
  const min = 10;
  const max = 60;
  const minutes = (Math.floor(Math.random() * (max - min + 1)) + min);

  useEffect(() => {
    const seconds = minutes * 60; // de minutos a segundos
    setSeconds(seconds)
    console.log({ minutes, seconds })


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
  }, []);

  return (
    <div>
      <img src="https://media.giphy.com/media/3o6MbhpKReYen8pnCo/giphy.gif" alt="" />
      <progress max={seconds} value={count} />
    </div>
  );
}

export default ProgressBar;
