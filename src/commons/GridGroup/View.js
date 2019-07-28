import React from 'react';
import GridItem from '../GridItem';


export default ({children, spacing, style}) => (
    <GridItem container justify="center" direction="row" alignItems="center" spacing={spacing} style={style}>
        {children}
    </GridItem>
)