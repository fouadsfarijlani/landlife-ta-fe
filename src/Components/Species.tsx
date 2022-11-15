import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { CONSTANTS } from '../lib';
import { ISpecies } from '../lib';
import axios from '../requests/axiosMain';
import Loader from './Loader';

const Species = () => {
    const [speciesList, setSpeciesList] = useState<ISpecies[]>();
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

    

    return(
        <>
            <Typography
                    variant={'h5'}
                    sx={{'margin-top': CONSTANTS.styles.margin_sm}}>
                    Lookiup the best methods used for species
            </Typography>
            {!speciesList ? (<Loader />) : (
                <FormControl fullWidth>
                    <InputLabel>Species</InputLabel>
                    <Select label= "species">
                        {speciesList.map((specie) => (
                            <MenuItem value={specie.tree_species_id} key={specie.tree_species_id}>{specie.latin_name}</MenuItem>
                        ))}
                    </Select>
                    <Button variant='contained' 
                        fullWidth sx={{'marginTop': CONSTANTS.styles.margin_sm}}>
                        Check Method
                    </Button>
                </FormControl>
            )}
        </>
    );
};


export default Species;