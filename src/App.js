import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleRepo from "./pages/SingleRepo";
import Boundary from "./pages/ErrorPage";
import ErrorPage from "./pages/404";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/repo/:id" element={<SingleRepo />} />
          </Route>
          <Route path="/error-boundaries" element={<Boundary />} />
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
