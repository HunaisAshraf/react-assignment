import { useState } from "react";

const UpdateArray = () => {
  const [toDo, setToDo] = useState(["eat", "sleep", "repeat"]);
  const [input, setInput] = useState("");

  const addData = () => {
    setToDo((t) => [...t, input]);
  };
  const deleteData = (index) => {
    setToDo((to) => toDo.filter((t, i) => index !== i));
  };

  return (
    <div className="form">
      <ul>
        {toDo.map((to, i) => (
          <li
            style={{ listStyle: "none" }}
            key={i}
            onClick={() => deleteData(i)}
          >
            {to}
          </li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={addData}>Add</button>
    </div>
  );
};
export default UpdateArray;
