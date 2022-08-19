import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">



      <Routes>

        <Route path='/products' element={<Products />}></Route>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
