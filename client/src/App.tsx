import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<div>Header</div>} />
    </Routes>
  );
}

export default App;
