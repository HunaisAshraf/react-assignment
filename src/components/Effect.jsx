import { useEffect, useState } from "react";

const Effect = () => {
  const [title, setTitle] = useState("My Project");
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  function resized() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  const handleChange = (e) => {
    setTitle((t) => (t = e.target.value));
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    window.addEventListener("resize", resized);
    return ()=>{
        window.removeEventListener("resize",resized)
    }
  }, []);

  return (
    <div className="form">
      <p>Height: {height}</p>
      <p>Width: {width}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Effect;
