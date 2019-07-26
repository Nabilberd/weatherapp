import React from 'react';
import RadioGroup from "@material-ui/core/RadioGroup";

import styles from '../style'

export default ({row, value, name, handleChange, children}) => (
    <RadioGroup
        row={row}
        name={name}
        value={value}
        onChange={handleChange}
        style={styles.radioGroupStyle}
    >
        {children}
    </RadioGroup>
)