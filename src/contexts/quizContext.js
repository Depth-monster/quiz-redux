import { createContext, useReducer } from "react";
import questions from "../data";

const initialState = {
  questions,
  currentQuestionIndex: 7,
  showResults: false,
  correctAnswerCount: 0,
};

const reducer = (state, action) => {
  //console.log(state.questions);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      return { ...state, currentQuestionIndex, showResults };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState); //через useReducer получаем доступ к state
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>; //через провайдер передаем
};
