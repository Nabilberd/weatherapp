import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from '../style';

export default ({align="center", color="textPrimary", display="inline", gutterBottom=true, variant="h4", children, style}) => (
    <Typography 
        align={align}
        color={color}
        display={display}
        gutterBottom={gutterBottom}
        variant={variant}
        style={{...styles.textStyle, ...style}}
    >
        {children}
    </Typography>
)