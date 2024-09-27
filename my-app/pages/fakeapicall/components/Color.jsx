import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


const Color = ({ backgroundColor }) => {
    return (
        <Box sx={{
            border: 1,
            padding: '4px',
            borderRadius: '50px',
        }}
        >
            <IconButton
                color="secondary"
                sx={{
                    backgroundColor,
                    width: "40px",
                    height: "40px",
                }}>
            </IconButton>
        </Box>
    );
};

export default Color;