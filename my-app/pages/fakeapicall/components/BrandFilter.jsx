import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

<<<<<<< HEAD
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

=======
>>>>>>> 7eedb802cd2f0b03db3b2699efe11a9a65146889
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
<<<<<<< HEAD
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
=======
    }
];

const BrandFilter = () => {
    return (
        <>
        {
            data.map((item, i) => {
                return <FormControlLabel
                    key={item.brandName}
                    control={
                        <Checkbox inputProps={{
                            'aria-label': item.brandName
                        }} defaultChecked={i === 0 } />
                    }
                    label={`${item.brandName} (${item.itemCount})`}
                />
            })
        }
        </>
    );
};

export default BrandFilter;
>>>>>>> 7eedb802cd2f0b03db3b2699efe11a9a65146889
