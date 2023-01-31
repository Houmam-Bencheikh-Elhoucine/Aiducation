import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Styles.css";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function SwiperUs() {
  return (
    <>
      <div className="SwiperUs">
        <Stack justifyContent='center' alignItems='center' sx={{width:"400px"}}>
        <GroupsOutlinedIcon sx={{fontSize:"300%",color:"#FF7832"}}/>
        <Typography  sx={{  color: '#FF7832',marginBottom:'5%',fontSize:"200%",fontFamily: 'Poppins' }}>
        Qui somme nous?
        </Typography>
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
        </Carousel>
        </Stack>
      </div>
    </>
  );
}

