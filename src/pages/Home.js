import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import Error from './Error';
import { degreeItems, showPopup } from '../utils/commons'
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

    const getUnits = (currentUnit) => degreeItems.find(unit => unit.key === currentUnit)

    React.useEffect(() => {
        doGetWeatherInfo();
    }, [dispatch, weather.degree, defaultCity]);

    const doGetWeatherInfo = () => {
        dispatch(getWeatherInfo(defaultCity, getUnits(weather.degree).value))
    }

    switch (status) {
        case 'error':
            return <Spinner />;
        case 'loading':
            return <Spinner />;
        case 'success':
            return (
                <>
                    <CheckWeather />
                    <WeatherInfo weatherData={weather.data} degree={weather.degree} cityName={defaultCity} />
                    <WeatherChart degree={weather.degree} weatherData={weather.data} />
                </>
            )
        default:
            return null;
    }

}
