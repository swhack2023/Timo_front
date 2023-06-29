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

  const Rc2 = () => {
    window.location.href = "/Rc_2"
  }

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
            롯데캐슬킹덤아파트
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      <Divider style={{ marginTop: '8px', marginBottom: '15px' }} />
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
        <Grid item xs={8}>
          <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Divider style={{ marginTop: '15px', marginBottom: '-10px' }} />
        <Grid item xs={4} style={{ marginTop: "22px" }}>
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
            >
              {[...Array(60)].map((_, index) => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: '10px', marginBottom: '15px' }} />
      <Button variant="contained" size="large" disableElevation style={{ backgroundColor: '#C6D93B', color: 'black', marginBottom: '5px', width: '80%' }}>봐줄게요!</Button>
      <br />
      <Button onClick={Rc2} variant="contained" size="large" disableElevation style={{ backgroundColor: '#C6D93B', color: 'black', marginTop: '5px', width: '80%' }}>봐주세요!</Button>
    </Box>
  );
};

export default Baby_sitter2;