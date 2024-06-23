import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>  
          <Navbar />
          <Alert message = "This is happened" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router >
      </NoteState>
    </ >
  );
}

export default App;
