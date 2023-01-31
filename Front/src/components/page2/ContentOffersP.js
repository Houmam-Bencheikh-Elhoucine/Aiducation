import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Box } from '@mui/material';


const Pending = styled(Button)({
  backgroundColor : "#00008C",
  marginLeft: "35%",
  marginTop : "1%",
})

const Accepted = styled(Button)({
  backgroundColor : "#68E365",
  marginLeft: "35%",
  marginTop : "1%",
})

const Refused = styled(Button)({
  backgroundColor : "#F83D3D",
  marginLeft: "35%",
  marginTop : "1%",
})


export default function ContentOffersP({data}) {


  return (
    <Box>
      {data && data.map((message) => {
        
        return(
        <CardContent 
        sx={{ backgroundColor : "#F0EFFD",
          width : "90%", 
          borderRadius : "18px",
          marginLeft : "5%",
          mb : 2,
          mt : 2,
        }}
        >
          <Typography variant="body2"
          sx={{
            color : "#00008C",
            fontWeight : "bold",
            fontSize : 16, 
          }}>



            <CardHeader
        sx={{  }}
          avatar={
            <Avatar sx={{ backgroundColor:"#FF7832"  }} aria-label="recipe">
              {message.sender.firstName[0]}{message.sender.lastName[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <LocationOnIcon
              sx={{ color: "#00008C61" }}
              />
              {message.announcement.wilaya}
            </IconButton>
          }
          title={message.announcement.user.firstName + message.announcement.user.lastName}
          
          subheader={message.announcement.user.idUser}
          
        />
            {message.announcement.title}
          </Typography>
          {message.state===0?
        <Pending variant='contained'
          size="small"
          >
           En attente 
          </Pending>:(message.state===1? <Accepted variant='contained'
          size="small"
          >
           Accepté(e) 
          </Accepted>:<Refused variant='contained'
          size="small"
          >
           Refusé(e) 
          </Refused>)}

        </CardContent>)
    })}

</Box>
 
    
  );
}





