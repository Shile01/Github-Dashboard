import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleRepo from "./pages/SingleRepo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/repo/:id" element={<SingleRepo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
