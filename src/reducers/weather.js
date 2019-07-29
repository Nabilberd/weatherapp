import { INPUT_CHANGE } from '../actions/actionTypes'
import { weatherMapper } from '../utils/commons';

const initialState = {
    city: "Münche",
    degree: "F"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE: {
            if (action.reducer === 'weather')
                return {
                    ...state,
                    [action.storekey]: action.payload
                };
            break;
        }
        case 'LOAD_WEATHER':
            return {
                ...state,
                status: "loading"
            };
        case 'LOAD_WEATHER_SUCCESS':
            return {
                ...state,
                data: weatherMapper(action.payload.data.list),
                status: "success"
            };
        case 'LOAD_WEATHER_FAIL':
            return {
                ...state,
                status: "error"
            }
        default:
            return state;
    }
}
