import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Loginpage from './Loginpage';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Loginpage/>} />
      </Routes>
    </div>

  );
}

export default App;
