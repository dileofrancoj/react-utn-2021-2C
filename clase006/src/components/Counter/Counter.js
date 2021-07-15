import { useReducer } from "react";
import { DECREMENT, INCREMENT, SET_INTERVAL } from "../../actions/counter";
import { counterReducer, initialState } from "../../reducers/counter";

const Counter = () => {
  // dispatch -> función ({type, payload})
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter</h1>
      <input
        type="text"
        placeholder="Modificar intervalo"
        onChange={(e) =>
          dispatch({
            type: SET_INTERVAL,
            payload: { interval: +e.target.value },
          })
        }
      />
      <h2>Valor: {state.value}</h2>
      <button type="button" onClick={() => dispatch({ type: INCREMENT })}>
        + {state.interval}
      </button>
      <button type="button" onClick={() => dispatch({ type: DECREMENT })}>
        - {state.interval}
      </button>
    </div>
  );
};

export default Counter;
