import  { type ReactElement } from "react";

interface PlaylistItemProps {
  artist: string;
    song: string;
    img: string;
    active?: boolean;
}


const PlaylistItem = ({ artist, song, img, active }: PlaylistItemProps): ReactElement => {
  return (
    <div className={`playlist-item ${active ? "active" : ""}`}>
      <img src={img} alt={song} />
      <div>
        <div>{artist}</div>
        <div style={{ fontSize: active ? "inherit" : "12px", color: active ? "inherit" : "#aaa" }}>{song}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;
