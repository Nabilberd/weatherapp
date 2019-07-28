import { INPUT_CHANGE, LOAD_WEATHER } from './actionTypes'
import { APPID, WEATHER_PARAM } from './config'

export function inputchange(payload, reducer, storekey) {
  return {
    type: INPUT_CHANGE,
    payload: payload,
    reducer: reducer,
    storekey: storekey
  }
};

export function getWeatherInfo(city, unit) {
  return {
    type: LOAD_WEATHER,
    payload: {
      request: {
        url: WEATHER_PARAM,
        params: {
          q: city,
          APPID: APPID,
          cnt: 40,
          units: unit
        }
      }
    }
  }
};
