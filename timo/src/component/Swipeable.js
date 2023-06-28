import { Button, Drawer, theme } from 'antd';
import { useState } from 'react';
import Map from './Map';
import Nav from './Navar';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const App = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  
  return (
    <div style={{marginTop:-100}}>
     <Nav/>
     <Map/>

      <div
   
      >
        <ExpandLessIcon type="primary" onClick={showDrawer}/>
   
     


      </div>


      <Drawer
        title="Basic Drawer"
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default App;