import React from 'react';
import loadable from '@loadable/component'
import { useSelector, useDispatch } from "react-redux";

import { degreeItems } from '../utils/commons';
import { getWeatherInfo, inputchange } from '../actions/actionCreators';

const Error = loadable(() => import('./Error'));
const Spinner = loadable(() => import('../commons/Spinner'));
const CheckWeather = loadable(() => import('../features/CheckWeather/components/CheckWeather'));
const WeatherChart = loadable(() => import('../features/WeatherChart/components/WeatherChart'));
const WeatherInfo = loadable(() => import('../features/WeatherInfo/components/WeatherInfo'));

//import Spinner from '../commons/Spinner';


export default () => {

    const weather = useSelector(state => state.weather);
    const user = useSelector(state => state.user);
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
        dispatch(inputchange("hamid", "user", "name"));
    }, [dispatch, defaultCity]);

    switch (status) {
        case 'error':
            const popupActions = [{ label: 'Retry', onClick: () => dispatch(getWeatherInfo(defaultCity, getUnits(degree).value)) }];
            return <Error actions={popupActions} />;
        case 'loading':
            return <Spinner />;
        case 'success':
            return (
                <>
                <h1> name : {user.name}</h1>
                    <CheckWeather />
                    <WeatherInfo weatherData={weatherData} degree={degree} cityName={defaultCity} />
                    <WeatherChart degree={degree} weatherData={weatherData} />
                </>
            )
        default:
            return null;
    }

}
