import "./App.css";
import Layout from "./Layout.jsx";
// import Update from "./components/UpdateObj";
import Counter from "./components/counter.jsx";
// import Card from "./components/Card";
// import { user } from "../data";
// import Form from "./components/Form";
import ColorPicker from "./components/ColorPicker";
// import UpdateArray from "./components/UpdateArray.jsx";
// import AddObj from "./components/AddObjToArr.jsx";
import Effect from "./components/Effect.jsx";
import Parent from "./components/Parent.jsx";
import Reference from "./components/Reference.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error404 from "./components/Error404.jsx";
import User from "./components/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Counter />} />
      <Route path="color-picker" element={<ColorPicker />} />
      <Route path="effect" element={<Effect />} />
      <Route path="*" element={<Error404 />} />
      <Route path="user" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
