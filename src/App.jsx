import "./App.css";
import Update from "./components/Update";
import Counter from "./components/counter.jsx";
// import Card from "./components/Card";
// import { user } from "../data";
import Form from "./components/Form"
import ColorPicker from "./components/ColorPicker"

function App() {
 
  return (
    <>
      {/* <Card data={user} /> */}
      <Counter />
      <Form />
      <Update />
      <ColorPicker />
    </>
  );
}

export default App;
