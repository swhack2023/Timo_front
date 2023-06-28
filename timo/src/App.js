import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/main';
import BF from './component/Baby_form';
import BS from './component/Baby_sitter';
import Details from './component/Details';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/BF" element={<BF />}></Route>
          <Route path="/BS" element={<BS />}></Route>
          <Route path="/Details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
