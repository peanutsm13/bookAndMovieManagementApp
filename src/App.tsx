import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import AddBook from "./pages/AddBook";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route
          path="/search"
          element={
            <SearchInput
              query={""}
              placeholder={""}
              onQueryChange={function (q: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
