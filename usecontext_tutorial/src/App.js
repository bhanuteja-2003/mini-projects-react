import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import {useState , createContext} from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ProfilePage from './Pages/ProfilePage';

export const AppContext = createContext();

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <AppContext.Provider value={{counter ,setCounter}} >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </AppContext.Provider>


    </>
  );
}

export default App;
