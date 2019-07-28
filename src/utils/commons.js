
import React from 'react';

export const weatherMapper = (data) => {
    const result = [];
    const currentData = data[0];
    const currentDate = currentData.dt_txt.substring(11);
    data.forEach(element => {
        const key = element.dt_txt.substring(0, 10);
        const time = element.dt_txt.substring(11);
        if (result[key]) {
            result[key].temp_min = Math.min(result[key].temp_min, parseInt(element.main.temp_min));
            result[key].temp_max = Math.max(result[key].temp_max, parseInt(element.main.temp_max));
        } else {
            result[key] = {
                temp_min: parseInt(element.main.temp_min),
                temp_max: parseInt(element.main.temp_max),
                description: element.weather[0].description,
                temp: element.main.temp
            };
        }
        if (time === currentDate) {
            result[key].description = element.weather[0].description;
            result[key].temp = element.main.temp;
        }
    });
    return Object.keys(result).map(resultItem => ({ ...result[resultItem], date: new Date(resultItem) }));
}

export const getImageWeather = (description, arrayWeatherImages) => {
    const imageName = arrayWeatherImages.find(weatherItem => description.includes(weatherItem.name));
    if (!imageName) return arrayWeatherImages[0];
    return imageName;
}

export const getTheDay = (date) => {
    const myDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    return myDays[date.getDay()]
}

export const getTheMonth = (date) => {
    const myMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return myMonths[date.getMonth()]
}
