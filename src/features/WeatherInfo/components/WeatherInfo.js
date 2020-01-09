import React, { useEffect } from 'react';

import GridGroup from '../../../commons/GridGroup';
import GridItem from '../../../commons/GridItem';
import { DailyWeather } from '../../DailyWeather';
import { styles } from '../styles/default';
import CardContent from './CardContent';


export default ({ weatherData, degree, cityName, selectedItem, setSelectedItem }) => {

    const [startIndex, setStartIndex] = React.useState(0);

    /* If the startIndex changes it means that the user had clicked to the left or the right then 
    *  the selectedItem will be the first
    */
    useEffect( () => {
        if(selectedItem < startIndex || selectedItem > startIndex +3) setSelectedItem(startIndex);
    }, [startIndex, selectedItem, setSelectedItem])

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
                            <CardContent {...weatherItem} degree={degree} isSelected={selectedItem === index+startIndex} setSelectedItem={()=> setSelectedItem(index+startIndex)}/>
                        </GridItem>
                    )}
                </GridGroup>
            </div>
        </>
    )
}