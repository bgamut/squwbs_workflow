import React, { useState, useEffect } from "react";
import {Animated} from "react-native"
export const Context = React.createContext();


export function ContextController({ children }) {
  let intialState = {
    posts: [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,],
    //data:[[0,1],[1,2]],
    random: "",
    yscroll: new Animated.Value(0),
    headerHeight:22,
  };

  const [state, setState] = useState(intialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}