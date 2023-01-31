import { Stack,Typography, Box } from "@mui/material";
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';




export default function About() {
    return (   
        
        <Box sx={{
            background: 'linear-gradient(180deg, #F0EFFD 0%, #F0EFFD 50.91%, #FFF5E9 100%)'
        }} >
        <Stack sx={{justifyContent:'center',alignItems : 'center' }}>
            <LocalLibraryOutlinedIcon sx={{fontSize:'50px',color:'#00008C',marginTop:'5%'}}/>
            <Typography component="div" sx={{  color: '#00008C',marginBottom:'5%',fontSize:"200%",fontFamily: 'Poppins' }}>
            C’est quoi  Aiducation ?
            </Typography>
            <Typography  component="div" sx={{  color: '#585860',minWidth:"400px",maxWidth:'40%',fontSize:"150%",fontFamily: 'Poppins' }}>    
            Aiducation est une application qui aide les enseignant
         et les élèves de poster, rechercher des cours
                 de soutien en ligne ou en présentiel.  

             </Typography>   

        </Stack>
        </Box>
    )
}
