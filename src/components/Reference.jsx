import { useEffect, useRef, useState } from "react";

const Reference = () => {
  const refVar = useRef(null);

  const handleClick = () => {
    console.log(refVar);
    refVar.current.focus();
  };

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <div className="form">
      <button className="btn" onClick={handleClick}>
        Click Me!!
      </button>
      <input type="text" ref={refVar} />
    </div>
  );
};

export default Reference;
