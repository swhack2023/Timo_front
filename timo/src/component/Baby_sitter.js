import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Nav from './Navar';
import { Calendar, theme } from 'antd';
import { Divider } from 'antd';
import { styled } from '@mui/material/styles';

const Baby_sitter = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  
  return (
    <Box style={{marginTop:'-100px'}}>
      <Nav />
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      <Divider style={{ marginTop: '8px', marginBottom: '15px' }} />
      <Grid container spacing={2}>
        <Grid item xs={4} style={{marginTop: "7px"}} >
            <span style={{ fontWeight: 'bold', color:'#5A5A5A', fontSize: '18px'}}>이름</span>
        </Grid>
        <Grid item xs={8}>
        <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Divider style={{ marginTop: '15px', marginBottom: '1px' }}/>
        <Grid item xs={4} style={{marginTop: "7px"}}>
            <span style={{ fontWeight: 'bold', color:'#5A5A5A', fontSize: '18px'}}>나이</span>
        </Grid>
        <Grid item xs={8}>
        <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Divider style={{ marginTop: '15px', marginBottom: '1px' }}/>
        <Grid item xs={4} style={{marginTop: "7px"}}>
            <span style={{ fontWeight: 'bold', color:'#5A5A5A', fontSize: '18px'}}>성별</span>
        </Grid>
        <Grid item xs={8}>
            <FormControlLabel value="female" control={<Radio style={{ color: '#CBCBCB' }}/>} label={<span style={{ color: '#797979' }}>남성</span>}  />
            <FormControlLabel value="male" control={<Radio style={{ color: '#CBCBCB' }}/>} label={<span style={{ color: '#797979' }}>여성</span>}  />
        </Grid>
        <Divider style={{ marginTop: '15px', marginBottom: '1px' }}/>
        <Grid item xs={4} style={{marginTop: "7px"}}>
            <span style={{ fontWeight: 'bold', color:'#5A5A5A', fontSize: '18px'}}>연락처</span>
        </Grid>
        <Grid item xs={8}>
            <TextField id="outlined-size-small" size="small" />
        </Grid>
      </Grid>
      <Divider style={{ marginTop: '15px', marginBottom: '15px' }}/>
      <Button variant="contained" size="large" disableElevation style={{ backgroundColor: '#C6D93B', color: 'black', marginBottom: '5px', width:'80%' }}>봐줄게요!</Button>
      <br />
      <Button variant="contained" size="large" disableElevation style={{ backgroundColor: '#C6D93B', color: 'black', marginTop: '5px', width:'80%'}}>봐주세요!</Button>
    </Box>
  );
};

export default Baby_sitter;
