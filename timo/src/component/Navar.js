import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'red'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 1 }}  >
            TIMO
          </Typography>
            
          </IconButton>
          <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 1 }}>
  
          </Typography>
        <AccountCircle/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}