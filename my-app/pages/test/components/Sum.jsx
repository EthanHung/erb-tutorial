import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const sum = (a, b) => {
    return a + b;
};

export default function Sum() {
    const [data, setData] = React.useState(null)
    
    return <>
        <Stack spacing={2} direction="row">
        <Button variant="contained">SUM VALUE {sum(1, 2)}</Button>
        </Stack>
    </>;
}