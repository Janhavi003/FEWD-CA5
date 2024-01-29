import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Books from './Components/Books';
import Form from './Components/Form';
import './App.css';
// Define the main App component
function App() {
  // Render the main App component with React Router
  return (
    <Router> 
      <Routes>
        {/* Define a route for the Books component */}
        <Route path="/" element={<Books />} />
        {/* Define a route for the Form component */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}
// Export the main App component
export default App;
