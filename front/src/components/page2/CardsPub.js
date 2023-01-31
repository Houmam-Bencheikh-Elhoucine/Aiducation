import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import pubPhoto from '../../assets/publication.png';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardsPub({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  /*let res = data.user;*/
  console.log(data)
  let titleAnnouncement = data.user.firstName + " " + data.user.lastName;
  let subheaderAnnouncement = data.user.idUser;

  return (
    <Card sx={{ maxWidth: 500, marginBottom:"3%", marginLeft:"10%" }}>
      <CardHeader
      sx={{ color: "#00008C" }}
        avatar={
          <Avatar sx={{ backgroundColor:"#FF7832"  }} aria-label="recipe">
            {data.user.firstName[0]}{data.user.lastName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LocationOnIcon
            sx={{ color: "#00008C61" }}
            />

            {data.wilaya}
          </IconButton>
        }
        title = {titleAnnouncement}
        
        subheader = {subheaderAnnouncement}
        
      />
      <CardContent 
      sx={{ backgroundColor : "#F0EFFD",
        width : "90%", 
        borderRadius : "18px",
        marginLeft : "5%",
        mb : 2,
      }}
      >
        <Typography variant="body2"
        sx={{
          color : "#00008C",
          fontWeight : "bold",
          fontSize : 16,
          
          
        }}>
          {data.title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="250"
        image={pubPhoto}
        alt="publication"
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to bookmark">
          <BookmarkBorderOutlinedIcon
          sx={{ color: "#00008C61" }}
          />
        </IconButton>
        <IconButton aria-label="mail">
          <MailOutlineRoundedIcon 
           sx={{ color: "#00008C61" }}
           />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="info"
        >
          <InfoIcon 
          sx={{ color: "#00008C61" }}
          />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {data.description}
          </Typography>
          <Typography>
            Prix: {data.price}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}