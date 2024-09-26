import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
    {
        brandName: 'Giorgio',
        iteamCount: 1,
    }
    {
        brandName: 'Lacouts',
        iteamCount: 1,
    }
    {
        brandName: 'Prada',
        iteamCount: 1,
    }
    {
        brandName: 'Zara',
        iteamCount: 2,
    }
];

const BrandFilter = () => {
    return (
        {
            data.map ((item, i) => {
                return  (
                    FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                label = {`${data[0].brandName ( $data[0].itemCount)}`});
            )}
        }
        )
    }
            export default BrandFilter;