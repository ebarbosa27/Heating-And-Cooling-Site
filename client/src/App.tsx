import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";

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
