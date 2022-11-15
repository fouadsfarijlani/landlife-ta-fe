import React from 'react';
import { Box, Grid, Button } from '@mui/material';

const AppBody = () => {
    return (
        <Grid container spacing={2} 
            direction="row" 
            justifyContent={'center'} 
            style={{minHeight: '100vh', marginTop: '24px'}}
            >
            <Grid item xs={6} md={4}>
                <Box>
                    <Button variant="outlined" fullWidth>Get Highest Tree</Button>
                    <Button variant="outlined" fullWidth>Browse Tree Species</Button>
                </Box>
            </Grid>
            <Grid item xs={6} md={8}> HI </Grid>
        </Grid>
    )
}

export default AppBody;