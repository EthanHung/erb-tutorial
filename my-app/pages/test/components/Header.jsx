import * as React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Header({ data, headerData }) {
    console.log('data', data);
    console.log('headerData', headerData);
    const [renderData, setRenderData] = React.useState(0);

    return <div>
            <Image src={'/test.png'} width={100} height={100} alt={'test'}/>
        <Stack spacing={2} direction="row">
            <Button variant="contained">SUM VALUE</Button>
            <Button variant="contained">SUM VALUE</Button>
            <Button variant="contained">SUM VALUE</Button>
        </Stack>
    </div>;
}