import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { Calendar, theme } from 'antd';
import { Divider } from 'antd';
import './mapstyle.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import MuiAlert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Baby_sitter2 = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const main = () => {
    window.location.href = "/D_2"
  }
  const [hour, setHour] = React.useState('');
  const [minute, setMinute] = React.useState('');

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const Rc1 = () => {
    window.location.href = "/Rc"
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };



  const onclickHandler = () => alert("인증되었습니다");

  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: '#CBE23A' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ArrowBackIosIcon onClick={main} />
          </IconButton>
          <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 0.8 }}>
          롯데캐슬프레미어아파트
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ marginTop: "7px" }}>
          <span style={{ fontWeight: 'bold', color: '#5A5A5A', fontSize: '18px' }}>이름</span>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Divider style={{ marginTop: '15px', marginBottom: '1px' }} />
        <Grid item xs={4} style={{ marginTop: "7px" }}>
          <span style={{ fontWeight: 'bold', color: '#5A5A5A', fontSize: '18px' }}>나이</span>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Divider style={{ marginTop: '15px', marginBottom: '-10px' }} />
        <Grid item xs={4} style={{ marginTop: "10px" }}>
          <span style={{ fontWeight: 'bold', color: '#5A5A5A', fontSize: '18px' }}>성별</span>
        </Grid>
        <Grid item xs={8}>
          <FormControlLabel value="female" control={<Radio style={{ color: '#CBCBCB' }} />} label={<span style={{ color: '#797979' }}>남성</span>} />
          <FormControlLabel value="male" control={<Radio style={{ color: '#CBCBCB' }} />} label={<span style={{ color: '#797979' }}>여성</span>} />
        </Grid>
        <Divider style={{ marginTop: '10px', marginBottom: '1px' }} />
        <Grid item xs={4} style={{ marginTop: "7px" }}>
          <span style={{ fontWeight: 'bold', color: '#5A5A5A', fontSize: '18px' }}>연락처</span>
        </Grid>
        <Grid item xs={6}>
          <TextField id="outlined-size-small" size="small" style={{width:'150px', }} />
        </Grid>
        <Grid item xs={2}>
          <Chip label="인증" style={{marginLeft:'-45px'}}  onClick={handleOpen}  />
        </Grid>


        <Divider style={{ marginTop: '15px', marginBottom: '-10px' }} />
        <Grid item xs={3} style={{ marginLeft: "12px", marginTop: "22px" }}>
          <span style={{ fontWeight: 'bold', color: '#5A5A5A', fontSize: '18px' }}>시간</span>
        </Grid>
        <Grid item xs={8}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="hour-label">시</InputLabel>
            <Select
              labelId="hour-label"
              id="hour-select"
              value={hour}
              onChange={handleHourChange}
              autoWidth
              label="시"
              style={{height:'50px'}}
            >
              {[...Array(9)].map((_, index) => (
                <MenuItem value={index + 9}>{index + 9}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="minute-label">분</InputLabel>
            <Select
              labelId="minute-label"
              id="minute-select"
              value={minute}
              onChange={handleMinuteChange}
              autoWidth
              label="분"
              style={{height:'50px'}}
            >
              {[...Array(60)].map((_, index) => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br/>
      <Button onClick={Rc1}variant="contained" size="large" disableElevation style={{ backgroundColor: '#C6D93B', color: 'black', marginBottom: '5px', marginRight: '20px', width: '35%', height: '45px' }}>돌봐줄게요!</Button>
      <Button variant="contained" size="large" disableElevation style={{ backgroundColor: '#FFF500', color: 'black', marginBottom: '5px', width: '35%', height: '45px' }}>돌봐주세요!</Button>    
      
       {/*모달  */}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} style={{ position: 'absolute' }}>
          <Typography variant="h6" component="h2">
            <div style={{ backgroundColor: '#CBE23A', position: 'relative', top: '-20px', height: '10px', right: '10px', width: '48%' }}>
              <p style={{ position: 'relative', top: "-18px", fontWeight: 'bold' }}>휴대폰 인증</p>
             
            </div>

            <p style={{ color: 'gray', position: 'relative', fontSize: '14px', top: '-30px', left:'-10px' }}>문자 메시지를 확인해주세요</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px'
            }}>
              <Grid container spacing={2}>
              <Grid item xs={4} style={{ marginTop: "7px" }}>
                  <span style={{ fontWeight: 'bold', color: '#5A5A5A', fontSize: '15px' }}>인증번호</span>
                </Grid>
                <Grid item xs={8}>
                  <TextField id="outlined-size-small" size="small" />
                </Grid>
                

              </Grid>
               

          </Typography>
        
          <Button  onClick={() => {handleClose(); handleClick2({ vertical: 'top', horizontal: 'center' })}}  style={{ backgroundColor: '#CBE23A', color: 'white', width: '294px', marginLeft: '-32px', marginTop: '80px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>
            확인 
          </Button>

        </Box>
        </Modal>
        <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert severity="success" onClose={handleClose2}>인증되었습니다</Alert>
        </Snackbar>
      </Box>
  );
};

export default Baby_sitter2;