import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha ,styled, useMediaQuery} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SavedCard from './SavedCard';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const drawerWidth = 240;

 export default function Page2(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const styledIcon = styled(SearchIcon)(({ theme }) => ({
    
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#00008C',
    backgroundColor: 'white',
    border: '3px solid rgba(0, 0, 140, 0.37)',
    borderRadius: '18px',
    '& .MuiInputBase-input': {
      paddingLeft: `calc(1em )`,
      
    },
  }));




  const drawer = (
    <div>
      <Toolbar 
        sx={{
          backgroundColor: ' #00008CE0'
        }}
      />
      <Link to="/">
      <Typography px={5} sx={{fontFamily:"Poppins",color:"white",backgroundColor:"#00008CE0",fontSize:"130%"}}>
            AIDUCATION 
      </Typography>
      </Link>
      
      <List 
        sx={{
          color: `white`,
          backgroundColor: ' #00008CE0',
          height: '87.4vh'
          
        }}
      >
        <Stack direction='row' justifyContent='start' alignItems='center' mb={3} mt={6} >
        <ListItemButton to="/page2">
          <HomeIcon/>
          <Typography ml={2} sx={{color:'white',fontFamily:'Poppins',fontSize:'80%'}}>
            Accueil
          </Typography>
          </ListItemButton>
          </Stack>
          <Stack direction='row' justifyContent='start' alignItems='center' mb={3}>
          <ListItemButton to="/page3">
          <BookmarkIcon />
          <Typography ml={2} sx={{color:'white',fontFamily:'Poppins',fontSize:'80%'}}>
            Favoris
          </Typography>
          </ListItemButton>
          </Stack>
          <Stack direction='row' justifyContent='start' alignItems='center' mb={3} >
          <ListItemButton to="/page5">
          <PersonIcon/>
          <Typography ml={2} sx={{color:'white',fontFamily:'Poppins',fontSize:'80%'}}>
            Profil
          </Typography>
          </ListItemButton>
          </Stack>
          <Stack direction='row' justifyContent='start' alignItems='center' mb={3}>
          <ListItemButton to="/page6">
          <SendIcon/>
          <Typography ml={2} sx={{color:'white',fontFamily:'Poppins',fontSize:'80%'}}>
            Messages
          </Typography>
          </ListItemButton>
          </Stack>
      </List>
      
   
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const isMobile = useMediaQuery('(max-width:968px)');

  useEffect(() => {
    getUserFavorites()
  }, [])

  let [userFavorites, setUserFavorites] = useState([])
  let getUserFavorites = async () =>{
    console.log("USER FAVORITES");
    let id = 1;
    let response = await fetch(`http://127.0.0.1:8000/api/favoriser/?user=${id}`);
    console.log("USER FAVORITES", response);
    /*let res = JSON.parse(response)*/
    let data = await response.json();
    console.log("USER FAVORITES", data);
    setUserFavorites(data);
  }


  return (
    <Box sx={{ display: 'flex',backgroundColor: `#F0EFFD`,height: '100%'


                }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: `#F0EFFD`,
            display: 'flex',
            alignItems: 'center',
            
          }}
          >

          <Search>
            <SearchIconWrapper>
              <styledIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>



          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon 
              sx={{ color:"#00008C"}}
              />
          </IconButton>
          <Button sx={{
            ml: 'auto',
          }} >
          <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '100%',
            color: '#00008C',
            fontWeight: 'bold',
          }}  mr={1}>
          Déconnecter
          
          </Typography>
          <LogoutIcon sx={{color:'#00008C'}}/>
          </Button>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            

            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, }}
      >
        <Toolbar />

     {/**   cards*/}
      
      {userFavorites && userFavorites.map((favorite) => {
        return(<SavedCard data={favorite}/>);
      })}
       
          


      
      </Box>
    </Box>
  );
}

























