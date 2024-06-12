import './App.css'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router , Route, Routes, Link} from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/contact">contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App
