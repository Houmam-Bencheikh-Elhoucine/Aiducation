import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import logo from '../assets/LOGO.svg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Box } from "@mui/system";



export default function Footer() {
    return (
        <Card sx={{backgroundColor:'#00008C',height:'100px',width:"100%", position:'static' }}>
            <Stack direction='row' mt={2} justifyContent='space-around' alignItems='center'  >
               <Box>
               <img src={logo} style={{width:'80%',height:'80%',marginLeft:'5%'}}/>
               </Box>
               <Stack direction='row' >
                <FacebookOutlinedIcon sx={{fontSize:'200%',color:'#fff',marginTop:'5%',marginLeft:'1%'}}/>
                <FacebookOutlinedIcon sx={{fontSize:'200%',color:'#fff',marginTop:'5%',marginLeft:'1%'}}/>
                <FacebookOutlinedIcon sx={{fontSize:'200%',color:'#fff',marginTop:'5%',marginLeft:'1%'}}/>
                </Stack>
               <Typography sx={{color:'white',fontFamily:'Poppins',fontSize:'80%'}}>
               Toujours là pour 
                    vous 
               </Typography>
            </Stack>

        </Card>
    )
    }