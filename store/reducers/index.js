const initialState = {
    time: 0,
    animate: true,
    timeOffset: 0,
    transitionDuration: 1000,
    viewport: {
        latitude: 52.500869,
        longitude: 13.419047,
        zoom: 16,
        pitch: 45,
        bearing: 0
    }
}

function rootReducer(state = initialState, action) {

    if (action.type === 'SET_TIME') {
        // old fashioned way
        // return Object.assign({}, state, {
        //     time: action.payload
        // })

        // es6 way
        return {...state, time: action.payload}
    }

    if (action.type === 'SET_STATE_DECKGL') {
        return {...state, animate: action.payload }
    }

    if (action.type === 'SET_TIME_OFFSET') {
        return {...state, timeOffset: action.payload }
    }

    if (action.type === 'SET_VIEWPORT') {
        return {...state, viewport: action.payload }
    }    

    return state;
}

export default rootReducer;