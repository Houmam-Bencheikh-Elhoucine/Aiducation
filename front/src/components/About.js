import { Stack,Typography, Box } from "@mui/material";





export default function About() {
    return (   
        
        <Box sx={{
            background: 'linear-gradient(180deg, #F0EFFD 0%, #F0EFFD 50.91%, #FFF5E9 100%)'
        }} >
        <Stack sx={{justifyContent:'center',alignItems : 'center' }}>
            <Typography variant="h2" component="div" sx={{  color: '#00008C',marginTop:"10%",marginBottom:'5%' }}>
            what is Aiducation?
            </Typography>
            <Typography variant="h5" component="div" sx={{  color: '#585860',maxWidth:'40%' }}>    
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore do
            et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation  
             </Typography>   

        </Stack>
        </Box>
    )
}
