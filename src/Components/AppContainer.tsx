import React, { ComponentProps, ReactNode } from 'react';
import { Container } from '@mui/material';

type IAppContainer = ComponentProps<typeof Container> & {
    children?: ReactNode;
}
const AppContainer: React.FC<IAppContainer> = ({children}): JSX.Element => {
    return(
    <Container fixed maxWidth={'lg'}>
        {children}
    </Container>
    );
}

export default AppContainer;