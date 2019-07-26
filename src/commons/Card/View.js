import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";

import styles from '../style'

export default ({raised = true, children}) => (
    <Card raised={raised} style={styles.cardStyle} >
        <CardContent>
            {children}
        </CardContent>
    </Card>
)

    
