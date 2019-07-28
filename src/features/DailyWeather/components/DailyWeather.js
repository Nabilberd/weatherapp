import React from 'react';

import Button from '../../../commons/ButtonStep';
import Text from '../../../commons/Text';
import { styles } from '../styles/default'

export default ({displayPrevious, onClickLeft, onClickRight, displayNext}) => {

    return (
        <div style={styles.navigation}>
            <div style={styles.arrowLeft}>
                {
                    displayPrevious && <Button variant="outlined" size="small" isLeft
                        handleClick={onClickLeft}
                    />
                }
            </div>
            <div style={styles.middleArrow}>
                <Text
                    style={{ color: 'black' }}
                >
                    Daily weather
                </Text> >
            </div>
            <div style={styles.arrowRight}>
                {
                    displayNext && <Button variant="outlined" size="small"
                        handleClick={onClickRight}
                    />
                }
            </div>
        </div>
    )
}