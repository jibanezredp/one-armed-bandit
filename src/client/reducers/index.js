const initialState = {
  fruits: [
    { isLoading: true },
    { isLoading: true },
    { isLoading: false },
    { isLoading: true },
    { isLoading: true },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default rootReducer;
