export const initialState = {
    address: null,
    load: true,
    processing: false,
    disableSegment: true,
    downloadButton: false,
    error: false
};

export function reducer(state, action) {
    switch (action.type) {
        case 'connectionOpen':
            return {
                ...state,
                processing: true,
                disableSegment: true
            };
        case 'connectionError':
            return {
                ...state,
                error: true
            };
        case 'connectionMessage':
            return {
                ...state,
                address: state.address.split(',')[0] + ',' + action.payload,
                processing: false,
                disableSegment: true,
                downloadButton: true,
            };
        case 'readerLoadEnd':
            return {
                ...state,
                downloadButton: false,
                address: action.payload,
                load: false,
                disableSegment: false
            };
        case 'handleError':
            return {
                ...state,
                error: false
            };
        default:
            return state;
    }
}
