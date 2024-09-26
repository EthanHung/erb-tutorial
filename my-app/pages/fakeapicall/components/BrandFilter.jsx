import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const data = [
    {
        brandName: 'Giorgio',
        iteamCount: 1,
    }
]

const BrandFilter = () => {
    return (
        <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
    );
};

export default BrandFilter;

