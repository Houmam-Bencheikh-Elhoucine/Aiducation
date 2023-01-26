import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pubPhoto from '../../assets/publication.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const OrangeButton = styled(Button)({

    backgroundColor: '#FF7832',
    color: 'white',
    opacity: '0.9',
    borderRadius: '6px',
    width: '90px',
    height: '30px',
    marginLeft: '20%',
    fontSize: '9px',
    '&:hover': {  
      opacity: '0.8',
      backgroundColor: '#FF7832',
      color: 'white',
      
    }
  })


export default function SavedCard() {
  

  return (
    <Card sx={{ maxWidth: 600  , display: 'flex', ml:'15%',mb:3, }}>
      <CardMedia
        component="img"
        sx={{ width: 200 , borderRadius : "18px", mb: 2,mt:2,ml:2,mr:2, p:1 }}
        image={pubPhoto}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Box sx={{display : 'flex', flexDirection:'row'}} >         
          <Typography component="div" variant="h5">
            Azouaou faicel 
          </Typography>
        <OrangeButton>
            More details
        </OrangeButton>

          </Box>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Saved on 31/12/2022
          </Typography>

            <Box sx={{
                backgroundColor : "#F0EFFD",
                width : "90%", 
                height : 110,
                borderRadius : "18px",
                mt : 1,
            }}>
          <Typography variant="body2"
        sx={{
            color : "#00008C",
            fontWeight : "bold",
            fontSize : 16,
            ml : 2,
            pt : 1,
        }}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna 
        </Typography>
        </Box>
        </CardContent>
        
      </Box>
      
    </Card>
  );
}