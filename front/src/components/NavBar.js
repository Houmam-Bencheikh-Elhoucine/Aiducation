import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/LOGO.svg';
import { useMediaQuery } from '@mui/material';


const pages = ['À propos', 'Equipe', 'Nous contacter'];


export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isMobile = useMediaQuery('(max-width:968px)');


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
       {!isMobile && <img src={logo}/>} 
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo}   />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '25%' }}>
            
              <Button
                onClick={handleCloseNavMenu}
                sx={{ mt:2 ,mb:1, color: 'white', display: 'block' }}
              
              >
                <Typography  textAlign="center" sx={{fontFamily:"Poppins"}}>À propos</Typography>
                
              </Button>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ mt:2 ,mb:1, color: 'white', display: 'block', marginLeft: '5%' }}
              
              >
                <Typography  textAlign="center" sx={{fontFamily:"Poppins"}}>Équipe</Typography>
                
              </Button>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ mt:2 ,mb:1, color: 'white', display: 'block', marginLeft: '5%' }}
              
              >
                <Typography  textAlign="center" sx={{fontFamily:"Poppins"}}>Nous contacter</Typography>
                
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
              
               <Button sx={{color:'white',fontFamily:'Poppins'}}>S’identifier</Button>
              
           
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
