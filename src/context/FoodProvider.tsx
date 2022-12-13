import { createContext, ReactNode, useContext, useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type FoodProviderProps = { children: ReactNode };

const FoodStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FoodProvider({ children }: FoodProviderProps) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <FoodStateContext.Provider value={value}>
      {children}
    </FoodStateContext.Provider>
  );
}

function useFood() {
  const context = useContext(FoodStateContext);
  if (context === undefined) {
    throw new Error("useFood must be used within a FoodProvider");
  }
  return context;
}

export { FoodProvider, useFood };
