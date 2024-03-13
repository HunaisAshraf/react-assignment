import { useEffect, useState } from "react";
import Card from "./Card.jsx";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(1);
  };

  async function fetchName() {
    let data = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + count
    );
    let json = await data.json();
    setUser(json);
  }

  async function handleClick(e) {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
    e.target.style.innerText = "clicked!";
  }

  useEffect(() => {
    fetchName();
  }, [count]);
  return (
    <>
      <div className="counter">
        <div className="count">
          <h1>{count}</h1>
          <button onClick={decrement} className="btn">
            -
          </button>
          <button onClick={reset} className="btn">
            Reset
          </button>
          <button onClick={increment} className="btn">
            +
          </button>
          <button onClick={(e) => handleClick(e)} className="btn">
            Click me
          </button>
        </div>
      </div>
      <Card data={user} />
    </>
  );
};

export default Counter;
