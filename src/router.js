
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutus";
import Todo from "./pages/todo";


function ProjectRoutes(params) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  )
}

export default ProjectRoutes;