import { Typography, Box, Grid, Divider } from '@mui/material';
import React from 'react';
import { CONSTANTS } from '../lib';
import { IHighestTrees } from '../lib';

interface IHighestTreesContentProps {
    data: IHighestTrees,
}

const HighestTreeContent: React.FC<IHighestTreesContentProps> = ({data}): JSX.Element => {
    const {highest_trees, year} = data;
    return(
        <>
            <Typography
                variant={'h5'}
                sx={{'margin-top': CONSTANTS.styles.margin_sm}}>
                Top 5 trees for year {year}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box sx={{backgroundColor: 'lightgray'}}>
                        <Typography variant={'body2'}>Tree ID</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{backgroundColor: 'primary.light'}}>
                        <Typography variant={'body2'}>Height</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
            {highest_trees.map((tree) => (
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Box sx={{backgroundColor: 'lightgray'}}>
                            <Typography variant={'body2'}>{tree.individual_tree_id}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{backgroundColor: 'primary.light'}}>
                            <Typography variant={'body2'}>{tree.height} cm</Typography>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </>
    );
}

export default HighestTreeContent;