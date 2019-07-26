import React from 'react';
import GridItem from '../GridItem';


export default ({children}) => (
    <GridItem container justify="center" direction="row" alignItems="center" spacing={5}>
        {children}
    </GridItem>
)