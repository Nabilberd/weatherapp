import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { degreeItems } from '../utils/commons';
import { getWeatherInfo } from '../actions/actionCreators';

import Error from './Error';
import Spinner from '../commons/Spinner';
import CheckWeather from '../features/CheckWeather/components/CheckWeather';
import WeatherChart from '../features/WeatherChart/components/WeatherChart';
import WeatherInfo from '../features/WeatherInfo/components/WeatherInfo';

//import Spinner from '../commons/Spinner';


export default () => {

    const weather = useSelector(state => state.weather);
    const dispatch = useDispatch();
    const status = weather.status;
    const defaultCity = weather.city;
    const degree = weather.degree;
    const weatherData = weather.data;

    const getUnits = (currentUnit) => degreeItems.find(unit => unit.key === currentUnit)
    const unitValue = getUnits(degree).value

    /* eslint-disable */
    React.useEffect(() => {
        dispatch(getWeatherInfo(defaultCity, unitValue));
    }, [dispatch, defaultCity]);

    // Using the composition design pattern the child manage childs and make sepation of roles for every component
    const [selectedItem, setSelectedItem] = useState(0);

    switch (status) {
        case 'error':
            const popupActions = [{ label: 'Retry', onClick: () => dispatch(getWeatherInfo(defaultCity, getUnits(degree).value)) }];
            return <Error actions={popupActions} />;
        case 'loading':
            return <Spinner />;
        case 'success':
            return (
                <>
                    <CheckWeather />
                    <WeatherInfo weatherData={weatherData} degree={degree} cityName={defaultCity} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                    <WeatherChart degree={degree} weatherData={weatherData} selectedItem={selectedItem} />
                </>
            )
        default:
            return null;
    }

}
