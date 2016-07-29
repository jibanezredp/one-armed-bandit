import { CHANGE_FRUIT } from '../actions';

const initialState = {
  0: { id: 0, name: 'spinner', color: 'black' },
  1: { id: 1, name: 'spinner', color: 'black' },
  2: { id: 2, name: 'spinner', color: 'black' },
  3: { id: 3, name: 'spinner', color: 'black' },
  4: { id: 4, name: 'spinner', color: 'black' },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_FRUIT:
    return {
      ...state,
      [action.id]: {
        ...state[action.id],
        name: action.name,
        color: action.color,
      }
    };
  default:
    return state;
  }
};

export default rootReducer;
