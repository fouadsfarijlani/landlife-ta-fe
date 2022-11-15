import React from 'react';
import { Box, Grid, Button } from '@mui/material';

const AppBody = () => {
    return (
        <Grid container spacing={2} 
            direction="row" 
            justifyContent={'center'} 
            style={{minHeight: '100vh', marginTop: '24px'}}
            >
            <Grid item xs={6} md={4} sx={{
                    'border-right': 'solid black 1px',
                    'border-top': 'solid black 1px',
                }}>
                <Box>
                    <Button  fullWidth>Get Highest Tree</Button>
                    <Button fullWidth>Browse Tree Species</Button>
                </Box>
            </Grid>
            <Grid item xs={6} md={8}
                sx={{'border-top': 'solid black 1px'}}
            > HI </Grid>
        </Grid>
    )
}

export default AppBody;