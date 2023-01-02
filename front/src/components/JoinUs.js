import { Stack, Box , Typography,styled,Button} from "@mui/material";
import { OrangeButton } from "../App";

const BlueButton = styled(Button)({

    backgroundColor: '#00008C',
    color: 'white',
    opacity: '0.9',
    borderRadius: '6px',
    width: '160px',
    '&:hover': {  
      opacity: '0.8',
      backgroundColor: '#00008C',
      
    }});





export default function JoinUs() {
    return (
        <Box sx={{
            background: 'linear-gradient(180deg, #F0EFFD 0%, #F0EFFD 50.91%, #FFF5E9 100%)'
        }} >
            <Stack sx={{justifyContent:'center',alignItems : 'center' }}>
            <Typography variant="h2" component="div" sx={{  color: '#00008C',marginTop:"10%",marginBottom:'5%' }}>
            Join Us!
            </Typography>
                <input type={"email"} style={{minWidth:'40%', borderRadius: '10px',height:"60px",border:"0",marginBottom:"3%" }} >
                </input>
                <input type={"password"} style={{minWidth:'40%',borderRadius: '10px',height:"60px",border:"0",marginBottom:"3%"}}>
                </input>
        <BlueButton>
            SIGN IN 
        </BlueButton>


        <Typography variant="h5" component="div" sx={{  color: '#585860',marginTop:"3%" }}>
            
            -- or --
            </Typography>
            
            <OrangeButton>
            Sign up with google
            </OrangeButton>

        
            </Stack>
        </Box>
    )
}   