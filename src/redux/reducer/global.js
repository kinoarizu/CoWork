const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.payload.isError,
      message: action.payload.message,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  return state;
};
