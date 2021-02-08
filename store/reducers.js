import ACTIONS from './actions.js'

const reducers = ( state, action ) => {
    switch (action.type) {
        case ACTIONS.MECI:
            return {
                ...state,
                MECI: action.payload
            };
        case ACTIONS.MECI2:
            return {
                ...state,
                MECI2: action.payload
                };
        case ACTIONS.MECI3:
            return {
                ...state,
                MECI3: action.payload
                };
        default:
            return state;            

    }        
}

export default reducers