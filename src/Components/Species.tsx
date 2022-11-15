import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ISpecies, IBestMethodForSpecies,CONSTANTS } from '../lib';
import axios from '../requests/axiosMain';
import Loader from './Loader';

const Species = () => {
    const [speciesList, setSpeciesList] = useState<ISpecies[]>();
    const [selectedSpieceis, setSelectedSpiecies] = useState<string>();

    const [displayedData, setDisplayedData] = useState<IBestMethodForSpecies>();
    useEffect(() => {
        const fetchData = async() => {
            try {
              const response = await axios.get(CONSTANTS.endpoints.getSpecies);
              setSpeciesList(response.data);
            }
            catch(err) {
             console.log(err);
            }
          }
          fetchData();
        },[]);
    
    const dropDownSelectionHandler = (e: SelectChangeEvent) => {
        setSelectedSpiecies(e.target.value);
    }

    const getBestMethod = async() => {
        try {
          const response = await axios.get(CONSTANTS.endpoints.getBestMethod+`?species_id=${selectedSpieceis}`);
          setDisplayedData(response.data);
        }
        catch(err) {
           console.log(err);
          }
    };

    return(
        <>
            <Typography
                    variant={'h5'}
                    sx={{'margin-top': CONSTANTS.styles.margin_sm}}>
                    Lookiup the best methods used for species
            </Typography>
            {!speciesList ? (<Loader />) : (
                <FormControl fullWidth sx={{'marginTop': CONSTANTS.styles.margin_sm}}>
                    <InputLabel>Species</InputLabel>
                    <Select label= "species" onChange={dropDownSelectionHandler}>
                        {speciesList.map((specie) => (
                            <MenuItem value={specie.tree_species_id} key={specie.tree_species_id}>{specie.latin_name}</MenuItem>
                        ))}
                    </Select>
                    <Button variant='contained' 
                        fullWidth sx={{'marginTop': CONSTANTS.styles.margin_sm}}
                        onClick={getBestMethod}
                        >
                        Check Method
                    </Button>
                </FormControl>
            )}
            {displayedData && (
                <Box sx={{'marginTop': CONSTANTS.styles.margin_md, 'border': 'solid black 1px'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography variant={'h6'}><strong>Species Id:</strong>{displayedData.tree_species_id}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={'h6'}><strong>Latin Name:</strong> NOT FINISHED</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={'h6'}><strong>Best Method Used:</strong> {displayedData.best_method}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={'h6'}><strong>Health Average:</strong> {displayedData.health_avg ?? 'N/A'}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};


export default Species;