import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
export default function NavBar() {
  return (
    
      <AppBar >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          
          <Stack direction="row" spacing={9} sx={{flexGrow: 1}}>
          <Button variant='text' color="inherit">About</Button>
          <Button variant='text' color="inherit">Team</Button>
          <Button variant='text' color="inherit">Contact Us</Button>
          </Stack>
          
          <Button variant='text' color="inherit">Sign in</Button>
          
        </Toolbar>
      </AppBar>
   
  );
}