import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from '../style';

export default ({align, color, display, gutterBottom, variant, children, style}) => (
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