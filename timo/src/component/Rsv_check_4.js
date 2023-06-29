import React from 'react';
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


const Rsv_check_4 = () => {
    const main = () => {
        window.location.href = "/"
    }
    return (
        <Box  >
            <AppBar position="static" style={{ backgroundColor: '#CBE23A' }} >
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
                </Toolbar>
            </AppBar>
            <br></br>
            <Grid container spacing={2} >
                <Grid item xs={8} style={{ marginTop: "7px" }} >
                    <span style={{ fontWeight: 'bold', color: 'black', fontSize: '18px' }}>삼성대우멤버스카운티2차</span>
                </Grid>
            </Grid>
            <br />
            <Box style={{ marginTop: '-30px', marginLeft: '25px', marginBottom: '30px', backgroundColor: '#C6D93B', height: '2px', width: '90%' }}><Divider /></Box>

            <Grid container spacing={2} style={{ marginLeft: "20px" }}>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>일정</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>2023.06.30 (금) 오후 14:00</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>이름</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>황보영</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>성별</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>여성</span>
                </Grid>
                <Grid item xs={2} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#BFBFBF', fontSize: '15px' }}>나이</span>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#525252', fontSize: '15px' }}>2세</span>
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
                        <div style={{ fontWeight: 'bold', color: 'black', fontSize: '25px', position: 'relative', bottom: '15px' }}>봐주세요!</div>
                    </div>
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left' }}>
                    <span style={{ color: 'black', fontSize: '25px' }}>예약이 완료되었습니다.</span>
                </Grid>
            </Grid>

            <img src={Rc} style={{marginTop:'170px'}}/>



        </Box>
    );
};

export default Rsv_check_4;