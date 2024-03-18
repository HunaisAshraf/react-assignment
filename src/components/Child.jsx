import { useState } from "react";

const Child = ({ sentData }) => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    
    sentData(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Child;
