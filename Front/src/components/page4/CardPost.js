import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
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
           <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <Stack direction="row" spacing={10}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Stack>
        <Stack direction="row" spacing={10}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={10}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <Button id="outlined-basic" label="Outlined" variant="outlined" ><input type="file" hidden/> Upload File </Button>
        </Stack>

       </CardContent> 
       </Card>
</Box>
 
    
  );
}