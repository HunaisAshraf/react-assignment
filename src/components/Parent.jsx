import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("");

  const handleData = (input) => {
    setData(input);
  };

  return (
    <>
      <p>{data}</p>
      <Child sentData={handleData} />
    </>
  );
};

export default Parent;
