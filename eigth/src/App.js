import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import './App.css';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact"
import {Error} from "./pages/Error"
import Navbar from './Navbar'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
