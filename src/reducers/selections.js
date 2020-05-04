const selections = (selected = [], action) =>{
    switch (action.type) {
        case 'SELECTIONS':
            return [...action.payload.selected]
        default:
            return selected
    }

}
export default selections