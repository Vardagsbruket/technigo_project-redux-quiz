import { useDispatch, useSelector } from "react-redux";
import { ScoreCounter } from "../components/ScoreCounter";
import { restart } from "../reducers/quiz";
import "./summaryPage.css";

export const SummaryPage = () => {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.quiz.answers);

  const questions = useSelector((state) => state.quiz.questions);

  const handleShowSummary = () => {
    dispatch(restart());
  };
  return (
    <div className="summaryContainer">
      <h1>You finished the quiz, well done! 🏆</h1>
      <ScoreCounter />
      <ul>
        {answers.map(({ questionId, isCorrect }) => (
          <li key={questionId}>
            <p className={isCorrect ? "green" : "red"}>
              {`
              ${isCorrect ? "✅" : "❌"}
              ${questionId}: 
              ${
                questions.filter(({ id }) => id === questionId)[0].questionText
              } - 
              ${
                isCorrect
                  ? "You answered correct!"
                  : "You answered incorrect 😞"
              }
              `}
            </p>
          </li>
        ))}
      </ul>

      <button onClick={handleShowSummary}>Try again?</button>
    </div>
  );
};
