import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
import HomePage from "./pages/exports";
import NotFound from "./pages/notFound/NotFound";


const App = () => {
  return (

  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    
   
  );
};

export default App;
