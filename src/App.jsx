import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Gallery from "./views/Gallery";
import Layout from "./pages/Layout";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Work from "./views/projects/Work";
import Videos from "./views/projects/Videos";
import Dev from "./views/projects/Dev";
import Personal from "./views/projects/Personal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/work" element={<Work />} />
          <Route path="projects/videos" element={<Videos />} />
          <Route path="projects/dev" element={<Dev />} />
          <Route path="projects/personal" element={<Personal />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
