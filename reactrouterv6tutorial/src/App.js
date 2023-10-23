import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Error from './Pages/Error'
import Navbar from './Navbar'
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
