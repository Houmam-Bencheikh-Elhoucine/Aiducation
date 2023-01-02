import bgPic from './assets/backgroundPic.jpg';
import { Typography , Stack , Button , styled } from '@mui/material';

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




function App() {
  return (
    <div className="App" >
        <img src={bgPic} style={
          {
            width: '100%',
            height: '96vh',
          }
        }  />
        
        <Stack>
        <Typography variant="p" component="div" sx={{  color: 'white',fontSize:"300%" ,  position: 'absolute', top: '40%',fontFamily: 'Poppins' , left: '50%', transform: 'translate(-50%, -50%)'}}>
              Ready to level up 
              your grades ?   
          </Typography>
        <Typography variant="h4" component="div" sx={{  color: 'white', position: 'absolute', top: '60%', left: '50%',fontFamily: 'Poppins', transform: 'translate(-50%, -50%)'}}>
            don’t waste more time looking for where to study , do it 
                 with ease here in Aiducation
          </Typography>
          <OrangeButton Button sx={{  position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            Get Started
          </OrangeButton >
          </Stack>
        
    </div>
  );
}

export default App;
