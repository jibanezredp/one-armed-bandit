const initialState = {
  fruits: [
    { id: 0, name: 'spinner', color: 'black' },
    { id: 1, name: 'spinner', color: 'black' },
    { id: 2, name: 'spinner', color: 'black' },
    { id: 3, name: 'spinner', color: 'black' },
    { id: 4, name: 'spinner', color: 'black' },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default rootReducer;
