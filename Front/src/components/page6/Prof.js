import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';





export default function Cours() {

return (


<Card sx={{ maxWidth: 500, marginTop:"10%", }}>
<CardContent>
    <Typography variant="h5" mb={3} sx={{color:'#00008C' }} >Professeurs ou instituts les plus actifs :</Typography>
    <Stack >
    <CardHeader
      sx={{ color: "#00008C" }}
        avatar={
          <Avatar sx={{ backgroundColor:"#FF7832"  }} >
            A
          </Avatar>
        }
        
        title="Azouaou Faicel"
        
        subheader="id user"
        
      />
      <CardHeader
      sx={{ color: "#00008C" }}
        avatar={
          <Avatar sx={{ backgroundColor:"#FF7832"  }} >
            K
          </Avatar>
        }
        
        title="Kherbachi Hamid"
        
        subheader="id user"
        
      />
      <CardHeader
      sx={{ color: "#00008C" }}
        avatar={
          <Avatar sx={{ backgroundColor:"#FF7832"  }} >
            I
          </Avatar>
        }
        
        title="Isaadi Badreddine"
        
        subheader="id user"
        
      />
    

    </Stack>    

</CardContent>
</Card>
);
}

