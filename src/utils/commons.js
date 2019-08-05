
import { confirmAlert } from "react-confirm-alert";

export const degreeItems = [
    {
        "key": "C",
        "value": "metric",
        "label": "Celcius"
    },
    {
        "key": "F",
        "value": "imperial",
        "label": "Fahrenheit"
    }
]
export const weatherMapper = (data) => {
    const result = [];
    const currentData = data[0];
    const currentDate = currentData.dt_txt.substring(11);
    data.forEach(element => {
        const key = element.dt_txt.substring(0, 10);
        const time = element.dt_txt.substring(11);
        if (result[key]) {
            result[key].temp_min = Math.min(result[key].temp_min, element.main.temp_min);
            result[key].temp_max = Math.max(result[key].temp_max, element.main.temp_max);
        } else {
            result[key] = {
                temp_min: element.main.temp_min,
                temp_max: element.main.temp_max,
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

export const convertData = (data, degree) => {
    return data.map(e => ({
        ...e,
        temp: convertTemperature(e.temp, degree),
        temp_min: convertTemperature(e.temp_min, degree),
        temp_max: convertTemperature(e.temp_max, degree),
    }))
}

const convertTemperature = (temp, toDegree) => {
    if (toDegree === 'C')
        return (temp - 32) * 5 / 9;
    return temp * 9 / 5 + 32;
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

export const getUnitName = (unit) => {
    return degreeItems.find((degreeItem) => degreeItem.key === unit).label;
}

export const showPopup = (title, message, buttons) => {
    confirmAlert({
        title: title,
        message: message,
        buttons: buttons,
        closeOnEscape: false,
        closeOnClickOutside: false
    })
}

export const showPosition = (position) => {
    console.log("showPosition", position);
    return position;
}

export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                showPosition(pos);
                return resolve(pos);
            })
        } else {
            reject("Geolocation is not supported by this browser.")
        }
    })
}