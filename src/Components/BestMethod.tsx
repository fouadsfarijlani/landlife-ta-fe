import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { CONSTANTS } from '../lib';
import { IMethods } from '../lib';
import axios from '../requests/axiosMain';

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
        </>
    );
};


export default BestMethod;