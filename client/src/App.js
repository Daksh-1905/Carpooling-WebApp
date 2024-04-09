import './App.css';
import PickUp from './pages/publishRide/Pick';
import DropOff from './pages/publishRide/Drop';
import {Routes,Route} from "react-router-dom"
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/Login.js';
import axios from 'axios'

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>

  );
}

export default App;
