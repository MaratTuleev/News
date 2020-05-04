export const setFromTo = (state) => ({
    type: 'SET_FROM_TO',
    payload: state
})
export const resetDate = (state) => ({
    type: 'RESET_DATE',
    payload: state
})
export const setSelections = (selected) => ({
    type: 'SELECTIONS',
    payload: {selected}
})

