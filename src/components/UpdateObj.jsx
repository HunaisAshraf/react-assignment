import { useState } from "react";

const Update = () => {
  const [data, setData] = useState({
    name: "xxxx",
    age: 20,
  });

  const changeName = (e)=>{
    // eslint-disable-next-line no-unused-vars
    setData(d=>({...data,name:e.target.value}))
  }
  const changeAge = (e) =>{
    //eslint-disable-next-line
    setData(d=>({...data,age:e.target.value}))
  }

  return (
    <div className="form">
      <p>
        {data.name} {data.age}
      </p>
      <input type="text" value={data.name} onChange={changeName}/>
      <input type="number" value={data.age} onChange={changeAge}/>
    </div>
  );
};

export default Update;
