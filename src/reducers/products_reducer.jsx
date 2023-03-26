import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  FILTER,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter((product) => {
      return product.featured === true;
    });

    return {
      ...state,
      products: action.payload,
      featured_products,
      products_loading: false,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product: action.payload,
      single_product_loading: false,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  if (action.type === FILTER) {
    let searchTerm = action.payload;
    const filteredProducts = state.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { ...state, filterProduct: filteredProducts };
  }

  return state;
  // throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
