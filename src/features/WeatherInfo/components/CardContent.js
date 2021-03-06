import React from 'react';

import { getImageWeather, getTheDay, getTheMonth } from '../../../utils/commons';
import Text from '../../../commons/Text';
import { styles } from '../styles/default';
import weatherImages from '../resources/weatherImages';
import Card from '../../../commons/Card';

export default ({ date, description, temp_min, temp_max, degree, isSelected, setSelectedItem }) => {

    return (
        <Card raised style={{ backgroundColor: isSelected ? '#d9dee4' : '' }}>
            <div onClick={setSelectedItem}>
                <div style={styles.dateBloc}>
                    <Text
                        style={styles.colorInfo}
                    >
                        {getTheDay(date)} <br />
                        {date.getDate() + " " + getTheMonth(date)}
                    </Text>
                </div>
                <div style={styles.imageBloc}>
                    <img height={60} alt=""
                        src={getImageWeather(description, weatherImages).path}
                    >
                    </img>
                </div>
                <>
                    <div style={styles.minTempBloc}>
                        <Text
                            style={styles.colorMinTemp}
                        >
                            {parseInt(temp_min) + "°" + degree}
                        </Text>
                    </div>
                    <>
                        <Text
                            style={styles.colorMaxTemp}
                        >
                            {parseInt(temp_max) + "°" + degree}
                        </Text>
                    </>
                </>
            </div>
        </Card>
    )

}