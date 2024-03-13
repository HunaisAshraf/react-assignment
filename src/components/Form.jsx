import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("Enter something");
  const [text, setText] = useState("Enter text");
  const [select, setSelect] = useState("select something");
  const [radio, setRadio] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="form">
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <p>value : {input}</p>
      </div>
      <div className="form">
        <textarea value={text} type="text" onChange={handleChange} />
        <p>value : {text}</p>
      </div>

      <div className="form">
        <select onChange={(e) => setSelect(e.target.value)} name="select" id="">
          <option value={select}>Select Somethig</option>
          <option value="Hi">Hi</option>
          <option value="Hello">Hello</option>
          <option value="Hey">Hey</option>
          <option value="kooi">Kooi</option>
        </select>
        <p>Value : {select}</p>
      </div>

      <div className="form">
        <label htmlFor="">
          <input
            type="radio"
            value="Hi"
            onChange={(e) => setRadio(e.target.value)}
            checked={radio === "Hi"}
          />
          HI
        </label>
        <label htmlFor="">
          <input
            type="radio"
            value="Hello"
            onChange={(e) => setRadio(e.target.value)}
            checked={radio === "Hello"}
          />
          Hello
        </label>
        <p>value: {radio}</p>
      </div>
    </>
  );
};

export default Form;
