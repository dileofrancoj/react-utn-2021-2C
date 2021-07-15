import { INCREMENT, DECREMENT, RESET, SET_INTERVAL } from "../actions/counter";

export const initialState = {
  value: 0,
  interval: 1,
};

/*
    Programación funcional: Funcion pura
    Una funcion -> que para una entrada X siempre tiene una salida Y
*/

// state -> estado actualizado en el reducer
/*
    CONVENCION :D

    action : {
        type : INCREMENT | DECREMENT | RESET,
        payload :  {interval : 4}
    }
*/
// action: {type : INCREMENT}
export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + state.interval,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - state.interval,
      };

    case SET_INTERVAL:
      return {
        ...state,
        interval: action.payload?.interval,
      };

    case RESET:
      return initialState;
    default:
      return state;
  }
};
