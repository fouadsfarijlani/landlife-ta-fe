import React, { ComponentProps } from 'react';
import { Typography } from '@mui/material';


type IAppTitle = ComponentProps<typeof Typography> & {
    titleText: string;
}
const AppTitle: React.FC<IAppTitle> = ({titleText}): JSX.Element => {
    return (
        <Typography variant='h1' align='center'>
            {titleText}
        </Typography>
    );
}
export default AppTitle;