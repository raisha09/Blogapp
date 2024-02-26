import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  Link } from 'react-router-dom';


const navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size='large' edge="start" color='inherit' aria-label="logo"></IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
          <Button  variant="contained"   color='inherit'> <Link to="/Add">AddBlog</Link></Button>&nbsp;
          <Button  variant='contained' color="inherit"> <Link to="/dash">DashBoard</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default navbar