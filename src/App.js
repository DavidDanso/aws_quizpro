import { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StartScreen from "./component/StartScreen";
import Main from "./component/Main";
import Error from "./component/Error";
import Loader from "./component/Loader";
import Questions from "./component/Questions";
import Footer from "./component/Footer";
import FinishedScreen from "./component/FinishedScreen";

//
const SECS_PER_QUESTION = 30;

//
const initialState = {
  questions: [],

  // 'loading', 'error', 'active', 'ready', 'finished'
  status: "loading",
  answer: null,
  index: 0,
  points: 0,
  btnIndex: 0,
  displayBtn: true,
  alertToggle: null,
  test: 0,
  highscore: localStorage.getItem("highscore") || 0,
  secondsLeft: null,
  num: 0,
};

//
function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        num: state.questions.length,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        secondsLeft:
          state.num === 0
            ? state.questions.length * SECS_PER_QUESTION
            : state.num * SECS_PER_QUESTION,
      };
    case "questionIndex":
      return { ...state, btnIndex: action.payload, answer: action.payload };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        displayBtn: false,
        test: question.correctOption,
        alertToggle: action.payload === question.correctOption ? true : false,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        displayBtn: true,
        alertToggle: null,
      };
    case "finishQuiz":
      const newHighscore =
        state.points > state.highscore ? state.points : state.highscore;
      localStorage.setItem("highscore", newHighscore);
      return {
        ...state,
        status: "finished",
        highscore: newHighscore,
      };
    case "timer":
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1,
        status: state.secondsLeft === 0 ? "finished" : state.status,
      };
    case "qustNumber":
      return { ...state, num: action.payload };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        num: state.questions.length,
      };

    default:
      throw new Error("Invalid Action");
  }
}

//
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    btnIndex,
    displayBtn,
    alertToggle,
    test,
    highscore,
    secondsLeft,
    num,
  } = state;

  //
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  //
  const quiz_questions = questions.slice(0, num);

  //
  const questionNum = quiz_questions.length;
  const questionIndex = index + 1;
  const totalPoints = quiz_questions.reduce(
    (accumulator, question) => accumulator + question.points,
    0
  );

  //
  return (
    <>
      <div className="app">
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen questionNum={questionNum} dispatch={dispatch} />
          )}
          {status === "active" && (
            <Questions
              questions={quiz_questions[index]}
              questionIndex={questionIndex}
              answer={answer}
              dispatch={dispatch}
              points={points}
              totalPoints={totalPoints}
              alertToggle={alertToggle}
              test={test}
              btnIndex={btnIndex}
            />
          )}
        </Main>
      </div>
      {status === "active" && (
        <Footer
          questionNum={questionNum}
          dispatch={dispatch}
          questionIndex={questionIndex}
          answer={answer}
          btnIndex={btnIndex}
          displayBtn={displayBtn}
          index={index}
          secondsLeft={secondsLeft}
        />
      )}

      {status === "finished" && (
        <FinishedScreen
          totalPoints={totalPoints}
          points={points}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default App;
