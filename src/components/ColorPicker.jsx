import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const styles = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
  };

  const changeColor = (e) => {
    setColor(e.target.value)
  };

  return (
    <div style={styles}>
      <input type="color" style={{border:"none"}} onChange={changeColor} />
    </div>
  );
};

export default ColorPicker;
