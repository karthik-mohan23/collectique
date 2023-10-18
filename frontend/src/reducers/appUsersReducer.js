const appUsersReducer = (state, action) => {
  if (action.type === "FETCH_LOADING") {
    return {
      ...state,
      appUsersLoading: true,
      appUsersError: false,
    };
  }
  if (action.type === "FETCH_SUCCESS") {
    return {
      appUsersLoading: false,
      appUsersError: false,
      appUsers: action.payload,
    };
  }
  if (action.type === "FETCH_ERROR") {
    return {
      ...state,
      appUsersLoading: false,
      appUsersError: true,
    };
  }
};
export default appUsersReducer;
