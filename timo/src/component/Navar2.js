import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function ButtonAppBar() {

        
    const main = () => {
        window.location.href = "/"
        }
      
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#CBE23A'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1}}
          >

            <ArrowBackIosIcon onClick={main}/>
     
          </IconButton>
          <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 0.8 }}>
                이편한 세상
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}