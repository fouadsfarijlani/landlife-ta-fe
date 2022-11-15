import { OutlinedInput, InputLabel, Typography, Button } from '@mui/material';
import { CONSTANTS } from '../lib';
import axios from '../requests/axiosMain';
import React, { ChangeEvent, useState } from 'react';
import { IHighestTrees } from '../lib';
import HighestTreeContent from './HighestTreeContent';

const HighestTree = () => {
    const [yearSelected, setYearSelected] = useState<string>('');
    const [displayedData, setDisplayedData] = useState<IHighestTrees | undefined>();

    const fetchData = async() => {
        try {
          const response = await axios.get(CONSTANTS.endpoints.getHighestTree+`?year_monitored=${yearSelected}`);
          setDisplayedData(response.data);
        }
        catch(err) {
            // Checking if err.response exists
           console.log(err);
          }
    };

    const yearSelectionHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setYearSelected(e.currentTarget.value);
    }

    return (
        <>
            <Typography variant='body2' sx={{'margin-top': CONSTANTS.styles.margin_sm}}>
                Which year are you looking into to get the top 5 highest trees?
            </Typography>
            <InputLabel htmlFor="year" sx={{'margin-top': CONSTANTS.styles.margin_sm}}>Year Monitored</InputLabel>
            <OutlinedInput id="year" onChange={yearSelectionHandler}/>
            <Button sx={{'margin-left': CONSTANTS.styles.margin_xs}} onClick={fetchData}>Search</Button>
            {(!displayedData || displayedData?.highest_trees.length === 0) ? 
                (<Typography color={'red'}>No Match</Typography>) : 
                (<HighestTreeContent data={displayedData} />
            )}
        </>
    );
}

export default HighestTree;