const initialState = {
    time: 0,
    animate: true,
    timeOffset: 0,
    data: null,
    loaded: false,
    update: false,
    buttonPlay: true,
    buttonPause: false,
    vendor: [0,1],
    histogramNeedsUpdate: false,
    histogram: null,
    transitionDuration: 1200,
    viewport: {
        latitude: 52.518566,
        longitude: 13.385754,
        zoom: 12,
        pitch: 45,
        bearing: 0,
        maxZoom: 19,
        minZoom: 10,
    },
    storyId: 0,
    storyVisible: false,
    provider0: 0,
    provider1: 0,
    provider2: 0,
    overlayInfo: false,
    barCurrent: null
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

    if (action.type === 'SET_LOADED') {
        return {...state, loaded: action.payload }
    }    

    if (action.type === 'SET_DATA') {
        return {...state, data: action.payload }
    }    

    if (action.type === 'SET_VENDOR') {
        return {...state, vendor: action.payload }
    }    

    if (action.type === 'SET_HISTOGRAM') {
        return {...state, histogram: action.payload }
    }

    if (action.type === 'SET_BUTTON_PLAY') {
        return {...state, buttonPlay: action.payload }
    }

    if (action.type === 'SET_BUTTON_PAUSE') {
        return {...state, buttonPause: action.payload }
    }

    if (action.type === 'SET_PROVIDER_0') {
        return {...state, provider0: action.payload }
    }

    if (action.type === 'SET_PROVIDER_1') {
        return {...state, provider1: action.payload }
    }

    if (action.type === 'SET_PROVIDER_2') {
        return {...state, provider2: action.payload }
    }

    if (action.type === 'SET_BAR_CURRENT') {
        return {...state, barCurrent: action.payload }
    }

    if (action.type === 'TOGGLE_PROVIDER') {
        return {...state, vendor: action.payload }
    }

    if (action.type === 'TOGGLE_UPDATE') {
        return {...state, update: action.payload }
    }

    if (action.type === 'TOGGLE_OVERLAY_INFO') {
        return {...state, overlayInfo: action.payload }
    }

    if (action.type === 'SET_UPDATE_HISTOGRAM') {
        return {...state, histogramNeedsUpdate: action.payload }
    }

    if (action.type === 'SET_STORY_VISIBLE') {
        return {...state, storyVisible: action.payload }
    }

    return state;
}

export default rootReducer;