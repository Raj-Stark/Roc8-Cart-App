/* eslint-disable array-callback-return */
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, title, price, image } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + 1;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: title,

        amount: 1,
        price: price,
        image: image,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          console.log("inc");

          return { ...item, amount: newAmount };
        }

        if (value === "dec") {
          let newAmount = item.amount - 1;
          console.log("dec");

          if (newAmount < 0) {
            newAmount = 0;
          }

          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return { ...state, total_items, total_amount };
  }

  return state;
  // throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
