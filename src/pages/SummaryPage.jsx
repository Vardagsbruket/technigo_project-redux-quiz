import { useDispatch } from "react-redux";
import { ScoreCounter } from "../components/ScoreCounter";
import { restart } from "../reducers/quiz";

export const SummaryPage = () => {
  const dispatch = useDispatch();

  const handleShowSummary = () => {
    dispatch(restart());
  };
  return (
    <div className="summaryContainer">
      <h1>You finished the quiz, well done!</h1>
      <ScoreCounter />
      <p>Correct answers: </p>
      <p>Incorrect answers: </p>
      <button onClick={handleShowSummary}>Try again?</button>
    </div>
  );
};
