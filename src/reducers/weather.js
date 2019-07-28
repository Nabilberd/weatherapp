import { INPUT_CHANGE } from '../actions/actionTypes'

const initialState = {
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
        }
        default:
            return state;
    }
}
