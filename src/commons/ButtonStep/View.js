import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ForwardRounded';

import styles from '../style';

export default ({size, variant, disabled=false, isLeft, handleClick=()=>{}}, style) => (

    <Button style={{...styles.buttonBloc, ...style}} variant={variant} size={size} onClick={handleClick} disabled={disabled}>
        <ArrowForward style={isLeft ? styles.backIconBloc : styles.nextIconBloc} color="primary" /> 
    </Button>
)