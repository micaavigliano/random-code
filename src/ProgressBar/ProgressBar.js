import { useEffect, useState } from "react";

export default function ProgressBar({ percent }) {
  let [count, setCount] = useState(0);
  let [decre, setDecre] = useState(percent);

  const decrement = () => {
    setDecre(decre -= 1);
    console.log("decrement", decre);
  };

  const credentials = () => {
    return console.log("hola, soy una credencial");
  }

  useEffect(() => {
    const interval = setInterval((percent) => {
      decrement();
      setCount((oldValue) => {
        let newValue = oldValue + 1;
        console.log("valor", newValue);
        if (decre === 0) {
          clearInterval(interval);
          credentials();
        }
        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>hola 1 dfdf</h1>
      <progress max={percent} value={count} />
      <section>
        <p>porcentaje: {percent}</p>
        <p>contador: {count}</p>
        <p>decremento: {decre}</p>
      </section>
    </div>
  );
}
