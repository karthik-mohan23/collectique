const appUsersReducer = (state, action) => {
  if (action.type === "FETCH_LOADING") {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }
  if (action.type === "FETCH_SUCCESS") {
    return {
      loading: false,
      error: false,
      appUsers: action.payload,
    };
  }
  if (action.type === "FETCH_ERROR") {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }
};
export default appUsersReducer;
