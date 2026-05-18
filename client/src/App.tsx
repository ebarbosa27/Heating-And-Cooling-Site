import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
