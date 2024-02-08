import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToggleComponentsPage from "../src/pages/main.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import CancelPage from "./pages/CancelPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ToggleComponentsPage />} />
          <Route path="/payment-success" element={<SuccessPage />} />
          <Route path="/payment-cancelled" element={<CancelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
