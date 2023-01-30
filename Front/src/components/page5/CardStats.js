import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';



export default function CardProfile() {
 

  return (
    <Card sx={{ maxWidth: 350 ,}}>
      

      <CardContent>
        <Stack justifyContent='center' alignItems='center' >
        <Typography variant="body1" mb={3} >Offres demandees</Typography>    
        <Avatar sx={{ backgroundColor: '#F0EFFD',color:'Black',marginBottom:'6%'}}  variant="rounded">
  2
</Avatar>
        <Typography variant="body1"mb={3} >Message recus</Typography>
        <Avatar sx={{ backgroundColor: '#F0EFFD',color:'Black' ,marginBottom:'6%'}}  variant="rounded">
  20
</Avatar>
        <Typography variant="body1"mb={3} >Annonce poster</Typography>
        <Avatar sx={{ backgroundColor: '#F0EFFD',color:'Black',marginBottom:'6%'}}  variant="rounded">
  30
</Avatar>
        </Stack>

      </CardContent>
      
    </Card>
  );
}