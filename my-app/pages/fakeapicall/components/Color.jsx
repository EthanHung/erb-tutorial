<<<<<<< HEAD
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


const Color = ({ backgroundColor }) => {
    return (
        <Box sx={{
            border: 1,
            padding: '4px',
            borderRadius: '50px',
        }}
=======
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const Color = ({ backgroundColor }) => {
    return (
        <Box
            sx={{
                border: 1,
                padding: '4px',
                borderRadius: '50px'
            }}
>>>>>>> 7eedb802cd2f0b03db3b2699efe11a9a65146889
        >
            <IconButton
                color="secondary"
                sx={{
                    backgroundColor,
<<<<<<< HEAD
                    width: "40px",
                    height: "40px",
                }}>
            </IconButton>
=======
                    width: '40px',
                    height: '40px',
                }}
            />
>>>>>>> 7eedb802cd2f0b03db3b2699efe11a9a65146889
        </Box>
    );
};

export default Color;