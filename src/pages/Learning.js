import React, { useCallback, useMemo, useReducer, useState } from "react";
import Plist from "./Plist";

const Learning = () => {
  const currentState = {
    counter: 0,
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { counter: state.counter + 1 };
      case "REMOVE":
        return { counter: state.counter - 1 };
      case "ADDBYPAYLOAD":
        return { counter: state.counter + action.payload };
      case "REMOVEBYPAYLOAD":
        return { counter: state.counter - action.payload };
      default:
        return state;
    }
  };

  const [newState, dispatchFn] = useReducer(reducerFn, currentState);

  const [products] = useState([
    { id: 1, title: "P1" },
    { id: 2, title: "P2" },
    { id: 3, title: "P3" },
  ]);

  const useCallbackHandler = useCallback(() => {
    dispatchFn({ type: "REMOVEBYPAYLOAD", payload: 5 });
  }, []);

  function showMax() {
    console.log("first");
    return products.length;
  }

  const length = useMemo(() => showMax(), [products]);
  //occurencer of a word in a string
  function occurences(str, chr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === chr) {
        count++;
      }
    }

    return count;
  }
  const sentence = "Hello, how are you?";
  const charToCount = "o";
  const countOccurrences = occurences(sentence, charToCount);
  console.log(countOccurrences);
  //

  return (
    <div>
      {length}
      Counter : {newState.counter}
      <br />
      <button
        onClick={() => {
          dispatchFn({ type: "ADD" });
        }}
      >
        Add Count
      </button>
      <button
        onClick={() => {
          dispatchFn({ type: "REMOVE" });
        }}
      >
        Remove Count
      </button>
      <button
        onClick={() => {
          dispatchFn({ type: "ADDBYPAYLOAD", payload: 5 });
        }}
      >
        Add Count By 5
      </button>
      {products.map((p) => (
        <Plist
          key={p.id}
          title={p.title}
          useCallbackHandler={useCallbackHandler}
        />
      ))}
    </div>
  );
};

export default Learning;
