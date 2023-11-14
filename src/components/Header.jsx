import "./header.css";
import { ProgressBar } from "./ProgressBar";

export const Header = () => {
  return (
    <div className="headerContainer">
      <h1>Quiz for your life 😉</h1>
      <div className="keepTrack">
        <p>Quiz timer ⏲️</p>
        <ProgressBar />
      </div>
    </div>
  );
};
