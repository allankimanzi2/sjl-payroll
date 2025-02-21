import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Display Navbar on all pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;


