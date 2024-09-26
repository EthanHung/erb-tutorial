import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
    {
        brandName: 'Giorgio',
        itemCount: 1,
    },
    {
        brandName: 'Lacoste',
        itemCount: 1,
    },
    {
        brandName: 'Prada',
        itemCount: 1,
    },
    {
        brandName: 'Zara',
        itemCount: 2,
    },
];


const BrandFilter = () => {
    return (
        data.map((item, i) => {
            return (
                <FormControlLabel
                    key={i}
                    control={<Checkbox />}
                    label={`${item.brandName} (${item.itemCount})`}
                />
            );
        })
    );
};

export default BrandFilter;

// const BrandFilter = () => {
//     return (
//             data.map ((item, i) => {
//                 return  (
//                     <FormControlLabel key={i}
//                     control={<Checkbox defaultChecked />} 
//                     label = {`${data[0].brandName} ($data[0].itemCount)}`}
//                     />
//             );
//         };
//     );
// };
//             export default BrandFilter;