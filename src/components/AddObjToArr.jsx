import { useState } from "react";

function AddObj() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    let user = {
      name,
      email,
      phone,
    };
    setUsers((u) => [...users, user]);
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleName = (e) => {
    setName((n) => (n = e.target.value));
  };

  const handleEmail = (e) => {
    setEmail((em) => (em = e.target.value));
  };

  const handlePhone = (e) => {
    setPhone((p) => (p = e.target.value));
  };

  const handleDelete = (index) => {
    setUsers((u) => u.filter((_, i) => i !== index));
  };

  return (
    <div className="form">
      {users.map((user, i) => (
        <div style={{ margin: "20px 0" }} key={i}>
          <h4>User {i + 1}</h4>
          <p>
            Name:{user.name} Email:{user.email} Phone:{user.phone}
          </p>
          <button className="btn" onClick={() => handleDelete(i)}>
            Delete
          </button>
        </div>
      ))}

      <div style={{ margin: "20px 0px" }}>
        <label htmlFor="">
          Name
          <input type="text" value={name} onChange={handleName} />
        </label>
        <label htmlFor="">
          Email
          <input type="text" value={email} onChange={handleEmail} />
        </label>
        <label htmlFor="">
          Phone
          <input type="number" value={phone} onChange={handlePhone} />
        </label>
      </div>
      <button className="btn" onClick={handleClick}>
        ADD
      </button>
    </div>
  );
}

export default AddObj;
