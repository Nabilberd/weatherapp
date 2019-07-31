import { INPUT_CHANGE } from '../actions/actionTypes'
import { weatherMapper, convertData } from '../utils/commons';

const initialState = {
    city: "München",
    degree: "F",
    status: "loading"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE: {
            if (action.reducer === 'weather') {
                const data = convertData(state.data, action.payload);
                return {
                    ...state,
                    data,
                    [action.storekey]: action.payload
                };
            }

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
