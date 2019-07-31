import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import Error from './Error';
import { degreeItems } from '../utils/commons';
import { getWeatherInfo } from '../actions/actionCreators';
import Spinner from '../commons/Spinner';
import CheckWeather from '../features/CheckWeather/components/CheckWeather';
import WeatherChart from '../features/WeatherChart/components/WeatherChart';
import WeatherInfo from '../features/WeatherInfo/components/WeatherInfo';

export default () => {

    const weather = useSelector(state => state.weather);
    const dispatch = useDispatch();
    const status = weather.status;
    const defaultCity = weather.city;
    const degree = weather.degree;
    const weatherData = weather.data;

    const getUnits = (currentUnit) => degreeItems.find(unit => unit.key === currentUnit)

    React.useEffect(() => {
        dispatch(getWeatherInfo(defaultCity, getUnits(degree).value))
    }, [dispatch, defaultCity, degree]);

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
                    <WeatherInfo weatherData={weatherData} degree={degree} cityName={defaultCity} />
                    <WeatherChart degree={degree} weatherData={weatherData} />
                </>
            )
        default:
            return null;
    }

}
