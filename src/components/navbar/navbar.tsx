import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'

export default function ButtonAppBar() {
  return (
    <AppBar position="fixed" className="navbar">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MuscleApp
      </Typography>
      <Button color="inherit"
          sx={{ color: 'white', textDecoration: 'none' }}
          component="a"
          href="/login">
        Login
      </Button>
    </Toolbar>
  </AppBar>
    
  );
}