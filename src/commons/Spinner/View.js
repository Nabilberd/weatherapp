import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from '../style';

export default () => (
    <CircularProgress 
        variant="indeterminate"
        style={styles.spinnerStyle}
        color="primary"
    />
)