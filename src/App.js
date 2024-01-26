import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./webapp/boards/components/List";
import Register from "./webapp/boards/components/Register";
import Read from "./webapp/boards/components/Read";
import Modify from "./webapp/boards/components/Modify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />}/>
          <Route path="/register" element={<Register />}/>
          <Route path='/read' element={<Read />}/>
          <Route path="/modify" element={<Modify />}/>
      </Routes>
    </>
  );
}

export default App;
