import React from 'react';

import GridGroup from '../../../commons/GridGroup';
import GridItem from '../../../commons/GridItem';
import Card from '../../../commons/Card';
import Text from '../../../commons/Text';

import { DailyWeather } from '../../DailyWeather';

import weatherImages from '../resources/weatherImages'
import { styles } from '../styles/default'

import { getImageWeather, getTheDay, getTheMonth } from '../../../utils/commons'

export default ({ weatherData, degree }) => {

    const [startIndex, setStartIndex] = React.useState(0);

    return (
        <>
            <DailyWeather
                onClickLeft={() => setStartIndex(startIndex - 1)}
                onClickRight={() => setStartIndex(startIndex + 1)}
                displayPrevious={startIndex > 0}
                displayNext={weatherData.length > startIndex + 3}
            />
            <div style={styles.cards}>
                <GridGroup spacing={6}>
                    {weatherData.slice(startIndex, startIndex + 3).map((weatherItem, index) =>
                        <GridItem key={index} item>
                            <Card raised >
                                <div style={styles.dateBloc}>
                                    <Text
                                        style={styles.colorInfo}
                                    >
                                        {getTheDay(weatherItem.date)} <br />
                                        {weatherItem.date.getDate() + " " + getTheMonth(weatherItem.date)}
                                    </Text>
                                </div>
                                <div style={styles.imageBloc}>
                                    <img height={80}
                                        src={getImageWeather(weatherItem.description, weatherImages).path}
                                    >
                                    </img>
                                </div>
                                <>
                                    <div style={styles.minTempBloc}>
                                        <Text
                                            style={styles.colorMinTemp}
                                        >
                                            {weatherItem.temp_min + "°" + degree}
                                        </Text>
                                    </div>
                                    <>
                                        <Text
                                            style={styles.colorMaxTemp}
                                        >
                                            {weatherItem.temp_max + "°" + degree}
                                        </Text>
                                    </>
                                </>
                            </Card>
                        </GridItem>
                    )}
                </GridGroup>
            </div>
        </>
    )
}