import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import Text from '../Text';
import styles from '../style';

export default ({value, label}) => (
    <FormControlLabel
        value={value}
        label={ <Text
                    align="center"
                    color="textPrimary"
                    display="inline"
                    gutterBottom
                    variant="h3"
                >
                    {label}
                </Text>}
        control={<Radio style={styles.radioColor} />}
    />
)


