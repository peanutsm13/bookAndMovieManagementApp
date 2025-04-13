import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import AddBook from "./pages/AddBook";
import Search from "./pages/Search";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/add-movie" element={<AddMovie />} />
    //     <Route path="/add-book" element={<AddBook />} />
    //     <Route path="/search" element={<Search />} />
    //   </Routes>
    // </Router>
    <div className="bg-red-500 text-white p-10 text-2xl">
      Tailwind効いてる？
    </div>
  );
}

export default App;
