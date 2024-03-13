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
    // eslint-disable-next-line no-unused-vars
    setColor(c => c = e.target.value);
  };

  return (
    <div style={styles}>
      {styles.backgroundColor === "#000000" ? (
        <p style={{ color: "#FFFFFF" }}>{color}</p>
      ) : (
        <p>{color}</p>
      )}

      <input type="color" style={{ border: "none" }} onChange={changeColor} />
    </div>
  );
};

export default ColorPicker;
