const appOrdersReducer = (state, action) => {
  if (action.type === "FETCH_LOADING") {
    return {
      ...state,
      appOrdersLoading: true,
      appOrdersError: false,
    };
  }
  if (action.type === "FETCH_SUCCESS") {
    return {
      appOrdersLoading: false,
      appOrdersError: false,
      appOrders: action.payload,
    };
  }
  if (action.type === "FETCH_ERROR") {
    return {
      ...state,
      appOrdersLoading: false,
      appOrdersError: true,
    };
  }
};
export default appOrdersReducer;
