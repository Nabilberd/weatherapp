import React from 'react';

import weatherField from '../resources/dailyWeather';
import weatherImages from '../../WeatherInfo/resources/weatherImages'
import Button from '../../../commons/ButtonStep';
import Text from '../../../commons/Text';
import { styles } from '../styles/default';
import { getImageWeather } from '../../../utils/commons';

export default ({ degree, cityName, currentWeather, displayPrevious, onClickLeft, onClickRight, displayNext }) => {

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
                <div style={styles.cityBloc}>
                    <Text
                        style={styles.cityFontStyle}
                    >
                        {cityName.toUpperCase()}
                    </Text>
                    <Text
                        style={styles.weatherInfoBloc}
                    >
                        {weatherField.weatherName}
                    </Text>
                </div>
                <div style={styles.imageBloc}>
                    <img height={50} alt=""
                        src={getImageWeather(currentWeather.description, weatherImages).path}
                    >
                    </img>
                </div>
                <div style={styles.cityBloc}>
                    <Text
                        style={styles.currentWeatherStyle}
                    >
                        {parseInt(currentWeather.temp) + "°" + degree}
                    </Text>
                    <Text
                        style={styles.descriptionBloc}
                    >
                        {currentWeather.description}
                    </Text>
                </div>
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