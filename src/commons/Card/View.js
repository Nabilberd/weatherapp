import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';

import styles from '../style'

export default ({raised = true, children, style}) => (
    <Card raised={raised} style={{...styles.cardStyle, ...style}} >
        <CardActionArea style={styles.cardAction}>
            <CardContent>
                {children}
            </CardContent>
        </CardActionArea>
    </Card>
)

    
