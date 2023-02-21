import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import FirstData from "./components/FirstData";
import ColorRoute from "./components/ColorRoute";

function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/:data" element={<FirstData/>}/>
              <Route path="/:word/:color1/:color2" element={<ColorRoute/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
