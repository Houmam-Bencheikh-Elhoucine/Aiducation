import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';


const TextFieldOrange = styled(TextField)({
  backgroundColor: '#FF7832',
  opacity: 0.5,
  borderRadius: 3,
  marginBottom: 5,
  
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },  
    color: '#00008C',
    fontWeight: 'bold',
  },
  '& .MuiInputLabel-root': {
    color: '#00008C',
    fontWeight: 'bold',
  },
});


const OrangeButton = styled(Button)({

  backgroundColor: '#FF7832',
  color: 'white',
  opacity: '0.9',
  borderRadius: '6px',
  width: '260px',
  marginBottom : '5%',
  marginLeft: '20%',
  '&:hover': {  
    opacity: '0.8',
    backgroundColor: '#FF7832',
    color: 'white',
    
  }
})


const category = [
  {
    value: 'category',
    label: 'category',
  },
  {
    value: 'category',
    label: 'category',
  },
  {
    value: 'category',
    label: 'category',
  },
  {
    value: 'category',
    label: 'category',
  },
];

const theme = [
  {
    value: 'theme',
    label: 'theme',
  },
  {
    value: 'theme',
    label: 'theme',
  },
  {
    value: 'theme',
    label: 'theme',
  },
  {
    value: 'theme',
    label: 'theme',
  },
];



export default function CardPost() {

  return (
    
      <Box>
         <Card sx={{ maxWidth: 900, marginLeft:"5%" }}>
      <CardContent 
      sx={{
        mb : 2,
        mt : 2,
      }}
      > <Stack>
           <TextFieldOrange
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=" Add the description of the post"
          sx={{width: '80%',marginLeft:"10%",}}
        />
        <Stack direction="row" justifyContent="space-around" alignItems="center" >
        <TextFieldOrange
          id="outlined-select-currency"
          select
          label="category"
          defaultValue="category"
          sx={{
            width: 200,
          }}
        >
          {category.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldOrange>
        <TextFieldOrange
          id="outlined-select-currency"
          select
          label="theme"
          defaultValue="theme"
          sx={{
            width: 200,
          }}
        >
          {theme.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldOrange>
        </Stack>
        <Stack direction="row" justifyContent="space-around" alignItems="center" >
        <TextFieldOrange id="outlined-basic" label="Wilaya" variant="outlined" sx={{width: 200,}} />
        <TextFieldOrange id="outlined-basic" label="Commune" variant="outlined" sx={{width: 200,}}/>
        </Stack>
        <Stack direction="row" justifyContent="space-around" alignItems="center" >
        <TextFieldOrange id="outlined-basic" label="Prize" variant="outlined" sx={{width: 200,}}/>
        <TextFieldOrange id="outlined-basic" label="Modality" variant="outlined" sx={{width: 200,}}/>
        </Stack>
        <TextFieldOrange
          id="outlined-multiline-static"
          label="KeyWords"
          multiline
          rows={4}
          defaultValue=" Add the KeyWords of the post"
          sx={{width: '80%',marginLeft:"10%",}}
        />
        <label style={{
          width: '80%',
          marginLeft:"10%",
          marginBottom: 5,
          backgroundColor: '#FF7832',
          opacity: 0.5,
          borderRadius: 3,
          color: '#00008C',
          fontWeight: 'bold',
          padding: 10,
          cursor: 'pointer',
          



        }}>
        <input type="file" hidden />  
        Add photo
        </label>

        <OrangeButton variant="contained" sx={{width: '40%',marginLeft:"30%",}}>Post</OrangeButton>
        </Stack>

       </CardContent> 
       </Card>
</Box>
 
    
  );
}