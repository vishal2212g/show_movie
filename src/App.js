import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import MovieSummery from "./component/MovieSummery";
import BookMovie from "./component/BookMovie";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/summery" element={<MovieSummery />} />
          <Route path="/:id/book-movie" element={<BookMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
