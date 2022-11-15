import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { CONSTANTS } from '../lib';
import { IMethods } from '../lib';
import axios from '../requests/axiosMain';
import Loader from './Loader';

const BestMethod = () => {
    const [methodList, setMethodList] = useState<IMethods[]>();
    useEffect(() => {
        const fetchData = async() => {
            try {
              const response = await axios.get(CONSTANTS.endpoints.getMethods);
              setMethodList(response.data);
            }
            catch(err) {
              // Checking if err.response exists
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
                    Best Methods used for species
            </Typography>
            {!methodList ? (<Loader />) : (
                <FormControl fullWidth>
                    <InputLabel>Methods</InputLabel>
                    <Select label= "Methods">
                        {methodList.map((method, i) => (
                            <MenuItem value={method.method} key={i}>{method.method}</MenuItem>
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


export default BestMethod;