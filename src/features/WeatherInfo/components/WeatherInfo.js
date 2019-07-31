import React from 'react';

import GridGroup from '../../../commons/GridGroup';
import GridItem from '../../../commons/GridItem';
import Card from '../../../commons/Card';
import { DailyWeather } from '../../DailyWeather';
import { styles } from '../styles/default'
import CardContent from './CardContent';


export default ({ weatherData, degree, cityName }) => {

    const [startIndex, setStartIndex] = React.useState(0);

    return (
        <>
            <DailyWeather
                onClickLeft={() => setStartIndex(startIndex - 1)}
                onClickRight={() => setStartIndex(startIndex + 1)}
                displayPrevious={startIndex > 0}
                displayNext={weatherData.length > startIndex + 3}
                currentWeather={weatherData[0]}
                cityName={cityName}
                degree={degree}
            />
            <div style={styles.cards}>
                <GridGroup spacing={6} style={styles.gridBloc}>
                    {weatherData.slice(startIndex, startIndex + 3).map((weatherItem, index) =>
                        <GridItem key={index} item>
                            <Card raised>
                                <CardContent {...weatherItem} degree={degree} />
                            </Card>
                        </GridItem>
                    )}
                </GridGroup>
            </div>
        </>
    )
}