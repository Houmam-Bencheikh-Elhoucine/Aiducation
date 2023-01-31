import bgPic from '../assets/backgroundPic.jpg';
import { Typography , Stack , Button , styled } from '@mui/material';
import { Link } from 'react-router-dom';

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




export default function home() {
  return (
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
        Ne perdez plus de temps à chercher où étudier,
           faites-le facilement ici à Aiducation.
          </Typography>
          <Link>
            <OrangeButton Button sx={{  position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)',fontFamily: 'Poppins'}}>
            Commencer
            </OrangeButton >
          </Link>
          </Stack>
        
    </div>
  );
}


