import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Autores from "./views/Autores";
import Update from "./views/AutorEdit";
import Detail from "./views/AutoresDetalles"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Autores/>}></Route>
          <Route exact path='/api/autor/update/:id' element={<Update/>}></Route>
          <Route exact path="/api/autor/:id" element={<Detail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
