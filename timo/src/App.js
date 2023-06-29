import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Swipeable from './component/Swipeable';
import BF from './component/Baby_form';
import BS from './component/Baby_sitter';
import Details from './component/Details';
import Details_2 from './component/Datails_2';
import Details_3 from './component/Datails_3';
import Details_4 from './component/Datails_4';
import Details_5 from './component/Datails_5';


import './App.css';

function App() {
  return (

 
    <div className="App"    style={{maxWidth:'360px',maxHeight:'740px' ,margin:'auto', marginTop:'100px' }}  >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Swipeable />}></Route>
          <Route path="/BF" element={<BF />}></Route>
          <Route path="/BS" element={<BS />}></Route>
          <Route path="/D_1" element={<Details />}></Route>
          <Route path="/D_2" element={<Details_2 />}></Route>
          <Route path="/D_3" element={<Details_3 />}></Route>
          <Route path="/D_4" element={<Details_4 />}></Route>
          <Route path="/D_5" element={<Details_5 />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
