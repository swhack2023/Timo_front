
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Divider } from 'antd';
import Rc from '../img/Rc.png'
import './mapstyle.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import kikiki from '../img/ki_ki.gif';
import React, { useEffect, useRef } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 230,
    height: 230,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius:'30px'
  
  };
const Rsv_check = () => {
    const main = () => {
        window.location.href = "/"
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

 


  
    return (
        <Box  >
            <AppBar position="static" style={{ backgroundColor: '#CBE23A' , width:'390px'}} >
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
                        예약내역
                    </Typography>

                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: -7 }}
                    >
                       <QrCode2Icon onClick={handleOpen}/>
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            <br></br>
            <Grid container spacing={2} >
                <Grid item xs={8} style={{ marginTop: "7px" }} >
                    <span style={{ fontWeight: 'bold', color: 'black', fontSize: '18px' }}>롯데캐슬프레미어아파트</span>
                </Grid>
            </Grid>
            <br />
            <Box style={{ marginTop: '-30px', marginLeft: '25px', marginBottom: '30px', backgroundColor: '#C6D93B', height: '2px', width: '90%' }}><Divider /></Box>

            <Grid container spacing={2} style={{ marginLeft: "20px" }}>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>일정</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>2023.06.30 (금) 오전 9:00</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>이름</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>이지훈</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>성별</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>남성</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>나이</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>26세</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>연락처</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>010-0000-0000</span>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Grid item xs={4} style={{ textAlign: 'left', }}>
                    <div style={{ backgroundColor: '#C6D93B', position: 'absolute', height: '15px' }}>
                        <div style={{ fontWeight: 'bold', color: 'black', fontSize: '25px', position: 'relative', bottom: '15px' }}>돌봐줄게요!</div>
                    </div>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: 'black', fontSize: '25px' }}>예약이 완료되었습니다.</span>
                </Grid>
            </Grid>

            {/* <img src={Rc} style={{marginTop:'170px', }} /> */}

            <img src={kikiki} style={{width:'390px' , marginTop:'110px' }}  />







            {/*모달  */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            
            >
                <Box sx={style} style={{position:'absolute'}}>
                <Typography variant="h6" component="h2">
                <div style={{backgroundColor:'#CBE23A' , position:'relative', top:'-20px',height:'10px', right:'10px',width:'85%' }}>
                    <p style={{position:'relative', top:"-18px", fontWeight:'bold'}}>예약 신청되었습니다.</p> 
                    <p style={{color:'gray', position:'relative', fontSize:'14px', top:'-38px' }}>QR코드를 확인해주세요.</p>
                </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} 
                style={{display:'flex', 
                        justifyContent:'center',
                        marginTop:'18px'
                        }}>
                    <img src='https://timo-qr.s3.ap-northeast-2.amazonaws.com/qr.png'/>

                </Typography>

                <Button onClick={handleClose} style={{backgroundColor:'#CBE23A' , color:'white', width:'294px', marginLeft:'-32px', marginTop:'30px', borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px'}}>
                        확인
                </Button>
                
                </Box>
            
                
            </Modal>


        </Box>
    );
};

export default Rsv_check;