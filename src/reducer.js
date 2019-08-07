export const initialState = {
    address: null,
    load: true,
    processing: false,
    disableSegment: true,
    downloadButton: false,
    error: false,
    showBuildingCount: false,
    showSolarPotential: false,
    appImageAdd: null,
    buildings: 0,
    area: 0,
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
        case 'buildingCount':
            return {
                ...state,
                showBuildingCount: true,
                appImageAdd: state.address,
            };
        case 'solarPotential':
            return {
                ...state,
                showSolarPotential: true,
                appImageAdd: state.address,
            };
        case 'closeSolar':
            return {
                ...state,
                showSolarPotential: false
            };
        case 'closeBuilding':
            return {
                ...state,
                showBuildingCount: false
            };
        default:
            return state;
    }
}
