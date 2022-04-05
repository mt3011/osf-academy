import Header from './components/Header'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import ValueProvider from './contexts/InputValue'

function App() {

  return (
    <div className="App">

      <ValueProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ValueProvider>

    </div>
  );
}

export default App