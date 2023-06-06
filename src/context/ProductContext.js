import { createContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, null);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </ProductContext.Provider>
  )
}