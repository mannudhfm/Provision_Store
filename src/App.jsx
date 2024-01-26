import './App.css'
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />}></Route>
        <Route path='/product-list' exact element={<div><NavBar /><Product /></div>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
