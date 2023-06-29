import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Swipeable from './component/Swipeable';
import BF from './component/Baby_form';
import BS from './component/Baby_sitter';
import BS2 from './component/Baby_sitter2';
import BS3 from './component/Baby_sitter3';
import BS4 from './component/Baby_sitter4';
import BS5 from './component/Baby_sitter5';

import Details from './component/Details';
import Details_2 from './component/Datails_2';
import Details_3 from './component/Datails_3';
import Details_4 from './component/Datails_4';
import Details_5 from './component/Datails_5';
import Rc  from './component/Rsv_check';
import Rc_2 from './component/Rsv_check_2';
import Rc_3 from './component/Rsv_check_3';
import Rc_4 from './component/Rsv_check_4';
import Rc_5 from './component/Rsv_check_5';

import Navar from './component/Navar';
import './App.css';

function App() {
  return (

 
    <div className="App"    style={{maxWidth:'400px',maxHeight:'800px' ,margin:'auto', }}  >
       
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Swipeable />}></Route>
          <Route path="/BF" element={<BF />}></Route>
          <Route path="/BS" element={<BS />}></Route>
          <Route path="/BS2" element={<BS2 />}></Route>
          <Route path="/BS3" element={<BS3 />}></Route>
          <Route path="/BS4" element={<BS4 />}></Route>
          <Route path="/BS5" element={<BS5 />}></Route>
          <Route path="/D_1" element={<Details />}></Route>
          <Route path="/D_2" element={<Details_2 />}></Route>
          <Route path="/D_3" element={<Details_3 />}></Route>
          <Route path="/D_4" element={<Details_4 />}></Route>
          <Route path="/D_5" element={<Details_5 />}></Route>
          <Route path="/Rc" element={<Rc />}></Route>
          <Route path="/Rc_2" element={<Rc_2 />}></Route>
          <Route path="/Rc_3" element={<Rc_3 />}></Route>
          <Route path="/Rc_4" element={<Rc_4 />}></Route>
          <Route path="/Rc_5" element={<Rc_5 />}></Route>



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
