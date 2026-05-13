import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div></div>} />
      </Route>
    </Routes>
  );
}

export default App;
