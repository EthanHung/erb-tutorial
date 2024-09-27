import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Color from './Color'


const buttons = [
  <Color key={'red'} backgroundColor={'red'} />,
  <Color key={'blue'} backgroundColor={'blue'} />,
  <Color key={'green'} backgroundColor={'green'} />,

  // <Button key="red">Red</Button>,
  // <Button key="green">Green</Button>,
  // <Button key="blue">Blue</Button>,
  // <Button key="pink">Pink</Button>,
  //   // (

  // <Box
  // sx={{boarder:1,
  //   padding: '4px',
  //   borderRadius: '50px',
  // }}
  // >
  //   <IconButton 
  //     color="secondary"
  //     sx={{
  //         backgroundColor: 'red',
  //         width: "40px",
  //         height: "40px",

  //     }}
  //     />
  //   </Box>),

];



const ColorFilter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="Large button group" sx={{}
      }>
        {buttons}
      </ButtonGroup>
    </Box>
  );
};



export default ColorFilter
