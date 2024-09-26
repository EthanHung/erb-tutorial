import * as React from 'react';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="S">S</Button>,
  <Button key="M">M</Button>,
  <Button key="L">L</Button>,
  <Button key="XL">XL</Button>,
];


const sizeFilter = () => {
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





export default sizeFilter
=======
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="S">S</Button>,
    <Button key="M">M</Button>,
    <Button key="L">L</Button>,
    <Button key="XL">XL</Button>,
];

const SizeFilter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup size="large" aria-label="Large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    );
};

export default SizeFilter;
>>>>>>> 7eedb802cd2f0b03db3b2699efe11a9a65146889
