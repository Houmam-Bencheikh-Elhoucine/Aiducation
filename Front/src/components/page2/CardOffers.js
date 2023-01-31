import * as React from 'react';
import Card from '@mui/material/Card';
import ContentOffersP from './ContentOffersP'
import Button from '@mui/material/Button';
import styled from '@emotion/styled'
import { ListItemButton } from '@mui/material';


const OrangeButton = styled(Button)({

  backgroundColor: '#FF7832',
  color: 'white',
  opacity: '0.9',
  borderRadius: '6px',
  width: '260px',
  marginBottom : '5%',
  marginLeft: '22%',
  '&:hover': {  
    opacity: '0.8',
    backgroundColor: '#FF7832',
    color: 'white',
    
  }
})


export default function CardOffers() {

  return (
  <div>
        <OrangeButton onClick={() => {
    window.location.href="/page4";
  }}>Create announce</OrangeButton>
        <Card sx={{ maxWidth: 400, marginBottom:"3%",marginLeft:"10%" }}>
       
      <ContentOffersP />
      
      
 
    </Card>
    <OrangeButton>All  users offers</OrangeButton>
      
  </div>
  
  );
}