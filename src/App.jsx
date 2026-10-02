import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
