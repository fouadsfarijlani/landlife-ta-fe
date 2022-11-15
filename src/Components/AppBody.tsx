import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import HighestTree from './HighestTree';
import { CONSTANTS } from '../lib/constants';

type userSelection = 'highest Tree' | 'Browse Species' | undefined;

const AppBody = () => {
    const [userSelections, setUserSelecion] = useState<userSelection>();
    return (
        <Grid container spacing={2} 
            direction="row" 
            justifyContent={'center'} 
            style={{minHeight: '100vh', marginTop: CONSTANTS.styles.margin_md}}
            >
            <Grid item xs={6} md={4} sx={{
                    'border-right': 'solid black 1px',
                    'border-top': 'solid black 1px',
                }}>
                <Box>
                    <Button  fullWidth onClick={()=> setUserSelecion('highest Tree')}>Get Highest Tree</Button>
                    <Button fullWidth onClick={()=> setUserSelecion('Browse Species')}>Browse Tree Species</Button>
                </Box>
            </Grid>
            <Grid item xs={6} md={8} sx={{'border-top': 'solid black 1px'}}>
                <HighestTree /> 
            </Grid>
        </Grid>
    )
}

export default AppBody;