import { Stack, Box , Typography,styled,Button} from "@mui/material";
import { OrangeButton } from "./Home";
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FcGoogle } from "react-icons/fc";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

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
            background: 'linear-gradient(180deg, #FFF5E9 0%, rgba(255, 245, 233, 0.645939) 35.41%, #F0EFFD 87.9%);'
        }} >
            <Stack sx={{justifyContent:'center',alignItems : 'center' }}>
            <PersonAddAlt1OutlinedIcon sx={{fontSize:'50px',color:'#00008C',marginTop:'5%'}}/>
            <Typography component="div" sx={{  color: '#00008C',marginBottom:'5%',fontSize:"200%",fontFamily: 'Poppins' }}>
            Rejoigner-nous !
            </Typography>
                <input type="email" style={{minWidth:'40%', borderRadius: '10px',height:"60px",border:"0",marginBottom:"3%",fontSize:"100%",fontFamily: 'Poppins' }}  placeholder="  Email">
                </input>
                <input type="password" style={{minWidth:'40%',borderRadius: '10px',height:"60px",border:"0",marginBottom:"3%",fontSize:"100%",fontFamily: 'Poppins'}} placeholder="  Mots de passe">
                </input>
                
        <BlueButton sx={{fontFamily: 'Poppins'}}>
        S’identifier
        </BlueButton>


        <Typography variant="h5" component="div" sx={{  color: '#585860',marginTop:"3%",fontFamily: 'Poppins' }}>
            
            -- or --
            </Typography>
            <FcGoogle size='5%'  />
            <OrangeButton sx={{fontFamily: 'Poppins', marginBottom:"5%"}}>
            Authentification avec google
            </OrangeButton>

        
            </Stack>
        </Box>
    )
}   