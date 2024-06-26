import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cells from "./pages/Cells.jsx"; // Import the new Cells page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/cells" element={<Cells />} /> {/* Add route for Cells page */}
      </Routes>
    </Router>
  );
}

export default App;
