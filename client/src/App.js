import './App.css';
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
