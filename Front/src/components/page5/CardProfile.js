import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';

const InputStyled = styled(Input)({
    width: '70%',
    margin: 'auto',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: '#F0EFFD',
    borderRadius: '5px',

    '& .MuiInputBase-input': {
        color: '#00008Cs',
        fontWeight: 'bold',
        fontSize: '1 rem',
        padding: '10px',
        },
    


            

})


export default function CardProfile() {
 

  return (
    <Card sx={{ maxWidth: 550 , marginLeft:"10%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
            W
          </Avatar>
        }
        title="William Smith"
        subheader="id user"
      />

      <CardContent>
        <Stack>
        <Stack direction='row'  alignItems='center' >    
        <Typography variant="body1" >Position</Typography>    
        <InputStyled disabled defaultValue="Teacher/student/institue" />
        </Stack>
        <Stack direction='row'  alignItems='center'>    
        <Typography variant="body1" >Wilaya</Typography>
        <InputStyled disabled defaultValue="Bejaia" />
        </Stack>
        <Stack direction='row'  alignItems='center'>    
        <Typography variant="body1" >Email</Typography>
        <InputStyled disabled defaultValue="Azouaou@estin.dz" />
        </Stack>
        <Stack direction='row'  alignItems='center'>    
        <Typography variant="body1" >Phone</Typography>
        <InputStyled disabled defaultValue="0553123123" />
        </Stack> 
        </Stack>

      </CardContent>
      
    </Card>
  );
}