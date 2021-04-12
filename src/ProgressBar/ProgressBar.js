import { useEffect, useState } from "react";

export default function ProgressBar({ percent }) {
  const [count, setCount] = useState(0);
  const [per, setPer] = useState(percent);

  const decrement = () => {
    setPer(per - 1);
    console.log("decrement", per);
  };

  useEffect(() => {
    const interval = setInterval((percent) => {
      decrement();
      setCount((oldValue) => {
        const newValue = oldValue + 1;
        console.log("valor", newValue);
        if (newValue === percent) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>hola 1 dfdf</h1>
      {percent}
      <progress max={percent} value={count} />
      <p>
        {count} - {percent}
      </p>
    </div>
  );
}
