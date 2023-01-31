import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import JoinUs from './JoinUs'; 
import SwiperUs from './SwiperUs';
import Footer from './Footer';
import { useRef } from 'react';
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

import bgPic from '../assets/backgroundPic.jpg';
import {  Stack , styled } from '@mui/material';

export const OrangeButton = styled(Button)({

backgroundColor: '#FF7832',
minWidth: '16%',
color: 'white',
opacity: '0.9',
borderRadius: '6px',
width: '160px',
'&:hover': {  
  opacity: '0.8',
  backgroundColor: '#FF7832',
  color: 'white',
}



});


const pages = ['À propos', 'Equipe', 'Nous contacter'];
export default function StartPage() {
    const about = useRef(null);
    const joinus = useRef(null);
    const footer = useRef(null);
    const team = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
    })
    }

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

    <div>
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
                onClick={() => scrollToSection(about)}
                sx={{ mt:2 ,mb:1, color: 'white', display: 'block' }}
              
              >
                <Typography  textAlign="center" sx={{fontFamily:"Poppins"}}>À propos</Typography>
                
              </Button>
              <Button
                
                onClick={() => scrollToSection(team)}
                sx={{ mt:2 ,mb:1, color: 'white', display: 'block', marginLeft: '5%' }}
              
              >
                <Typography  textAlign="center" sx={{fontFamily:"Poppins"}}>Équipe</Typography>
                
              </Button>
              <Button
                
                onClick={() => scrollToSection(footer)}
                sx={{ mt:2 ,mb:1, color: 'white', display: 'block', marginLeft: '5%' }}
              
              >
                <Typography  textAlign="center" sx={{fontFamily:"Poppins"}}>Nous contacter</Typography>
                
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
              
               <Button onClick={() => scrollToSection(joinus)} sx={{color:'white',fontFamily:'Poppins'}}>S’identifier</Button>
              
           
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div className="Home" >
        <img src={bgPic} style={
          {
            width: '100%',
            height: '96vh',
          }
        }  />
        
        <Stack>
        <Typography  component="div" sx={{  color: 'white',minWidth:"400px",  fontSize:"200%" ,  position: 'absolute', top: '40%',fontFamily: 'Poppins' , marginLeft: '50%', transform: 'translate(-50%, -50%)'}}>
        Prêt à améliorer       
       vos notes?
          </Typography>
        <Typography  component="div" sx={{  color: 'white',minWidth:"400px",fontSize:"100%", position: 'absolute', top: '60%', left: '50%',fontFamily: 'Poppins', transform: 'translate(-50%, -50%)'}}>
        ne perdez plus de temps à chercher où étudier,
           faites-le facilement ici à Aiducation
          </Typography>
          <OrangeButton onClick={() => scrollToSection(joinus)} sx={{  position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)',fontFamily: 'Poppins'}}>
          Commencer
          </OrangeButton >
          </Stack>
        
    </div>
    
    <div ref={about} className='about'>
    <About />
    </div>
    <div ref={team} className='swiperus'>
    <SwiperUs/>
    </div>
    <div ref={joinus} className='joinus'>
    <JoinUs /> 
    </div>            
    <div ref={footer} className='footer'>
    <Footer/>
    </div>
    </div>
    
    )   
}
