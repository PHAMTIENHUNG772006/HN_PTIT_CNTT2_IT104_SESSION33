import type { Product } from "../../src/components/Product";

const initCart: Product[] =  []
interface Action {
    type : string,
    payload: Product ;
}

export const CartReducer = (state = initCart, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (!action.payload) return state;
      const product = action.payload;

      const findItem = state.find((item) => item.id === product.id);
  
      if (!findItem || findItem.quantity === 0) {
        return state;
      }
      

      if (findItem) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload?.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
