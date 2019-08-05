import { INPUT_CHANGE } from '../actions/actionTypes'
import { weatherMapper } from '../utils/commons';

const initialState = {
    long: "",
    lat: ""
};

export default function localisation(state = initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE: {
            if (action.reducer === 'localisation') {
                return {
                    ...state,
                    long: action.payload.longitude,
                    lat : action.payload.latitude
                };
            }
            return state;
        }
        default:
            return state;
    }
}