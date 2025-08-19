import { Controls } from "./Controls";
import img1 from "../assets/img1.jpg";

export const CurrentPlayer = () => {
    return (
        <div className="now-playing">
      <img src={img1} alt="Album Cover" />
      <div className="song-info">
        <h2>Symphony No. 5</h2>
        <p>Ludwig van Beethoven</p>
      </div>
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <Controls />
    </div>
    );
}