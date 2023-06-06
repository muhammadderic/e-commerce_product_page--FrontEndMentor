export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": return action.payload
    case "REMOVE_PRODUCT": return null
    default: return state;
  }
}