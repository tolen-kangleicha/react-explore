import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <div className='h-screen flex justify-center w-screen'>
      <Navbar />
      <div className='w-full'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
