import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./pages/Movies";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        {/* <Route path="/books" element={<Books />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
