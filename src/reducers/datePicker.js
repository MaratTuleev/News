const datePicker = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FROM_TO':
            return action.payload
        default:
            return state
    }

}
export default datePicker