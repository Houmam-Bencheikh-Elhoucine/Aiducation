import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';





export default function Cours() {

return (


<Card sx={{ maxWidth: 500, marginBottom:"3%", }}>
<CardContent>
    <Typography variant="h5" mb={3} sx={{color:'#00008C' }} >Cours les plus  suivis</Typography>
    <Stack direction='row'>

    <Avatar sx={{ bgcolor: '#F0EFFD',color:'#00008C',width:'30%',height:'120px',}}  variant="rounded">
    Categorie :<br/>
    math <br/><br/>
    Theme : <br/>
    college
    </Avatar>
    <Avatar sx={{ bgcolor: '#F0EFFD',color:'#00008C',width:'30%',height:'120px',marginLeft:'6%'}}  variant="rounded">
    Categorie :<br/>
    math <br/><br/>
    Theme : <br/>
    college
    </Avatar>
    <Avatar sx={{ bgcolor: '#F0EFFD',color:'#00008C',width:'30%',height:'120px',marginLeft:'6%'}}  variant="rounded">
    Categorie :<br/>
    math <br/><br/>
    Theme : <br/>
    college
    </Avatar>

    </Stack>    

</CardContent>
</Card>
);
}

