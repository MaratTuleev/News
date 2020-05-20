const datePicker = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FROM_TO':
            return action.payload
        case 'RESET_DATE':
            return action.payloadej
        default:
            return state
    }

}
export default datePicker