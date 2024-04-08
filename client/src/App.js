import './App.css';
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
