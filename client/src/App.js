import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PickUp from './pages/publishRide/Pick';
import DropOff from './pages/publishRide/Drop';
import {Outlet} from "react-router-dom"

function App() {
  return (
    <>
      <PickUp/>
      <Outlet/>
    </>

  );
}

export default App;
