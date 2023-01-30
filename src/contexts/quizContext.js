import { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";
import questions from "../data";

export const QuizContext = createContext();

const reducer = (state, action ) => {
console.log(action)
switch (action.type){
    case "NEXT_QUESTION":{ //если нажата кнопка next, мы получаем такой action и меняем индекс вопроса
        return{...state,
        currentQuestionIndex:state.currentQuestionIndex+1}
    };

}
  return state;
};

const initialState = {
  questions,
  currentQuestionIndex:0
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);//через useReducer получаем доступ к state
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;//через провайдер передаем 
};
