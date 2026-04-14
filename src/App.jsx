import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./views/Gallery";
import Layout from "./pages/Layout";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
