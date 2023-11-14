import "./header.css";
export const Header = () => {
  return (
    <div className="headerContainer">
      <h1>Quiz for your life 😉</h1>
      <div className="keepTrack">
        <p>Quiz timer ⏲️</p>
        <input type="range" />
      </div>
    </div>
  );
};
