export const shorterTitle = (title) =>{
    const shortTitle = title.split(" ")
    return `${shortTitle[0]} ${shortTitle[1]}`
}
export const isInCart = (state, id) =>{
    const result = !!state.selecteditems.find(item => item.id === id)
    return result
}

export const quantityCount = (state, id) =>{
    const index = state.selecteditems.findIndex(item => item.id === id)
    if(index === -1){
        return false
    }else{
        return state.selecteditems[index].quantity
    }
}