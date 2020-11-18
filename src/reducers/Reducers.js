export const actions = {
    FETCH_DATA: 'FETCH_DATA',
    STORE_DATA: 'STORE_DATA',
    FETCH_DATA_FAILED: 'FETCH_DATA_FAILED',
    NEXT_PAGE: 'NEXT_PAGE',
    PREV_PAGE: 'PREV_PAGE'
}

export const initialState = {
    loading: false,
    data: [],
    page: 1
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case actions.FETCH_DATA:
            return {
                ...state,
                loading: true
            }
        case actions.STORE_DATA:
            return {
                ...state,
                loading: false,
                data: payload.results
            }
        case actions.FETCH_DATA_FAILED:
        case actions.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case actions.PREV_PAGE:
            return {
                ...state,
                page: state.page - 1
            }
        default:
            return state;
    }
}