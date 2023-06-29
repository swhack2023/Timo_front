import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Modal from '@mui/material/Modal';
import kiki from '../img/kiki.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 230,
  height: 230,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '30px'


};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#CBE23A' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 1 }}  >
              <img src={kiki} />
            </Typography>

          </IconButton>
          <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 1 }}>

          </Typography>
          <AccountCircle onClick={handleOpen} />
        </Toolbar>
      </AppBar>

      {/*모달  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} style={{ position: 'absolute' }}>
          <Typography variant="h6" component="h2">
            <div style={{ backgroundColor: '#CBE23A', position: 'relative', top: '-20px', height: '10px', right: '10px', width: '85%' }}>
              <p style={{ position: 'relative', top: "-18px", fontWeight: 'bold' }}>예약 신청되었습니다.</p>
              <p style={{ color: 'gray', position: 'relative', fontSize: '14px', top: '-38px' }}>QR코드를 확인해주세요.</p>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '18px'
            }}>
            <img src='https://timo-qr.s3.ap-northeast-2.amazonaws.com/qr.png' />

          </Typography>

          <Button onClick={handleClose} style={{ backgroundColor: '#CBE23A', color: 'white', width: '294px', marginLeft: '-32px', marginTop: '30px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>
            확인
          </Button>

        </Box>


      </Modal>

    </Box>


  );
}