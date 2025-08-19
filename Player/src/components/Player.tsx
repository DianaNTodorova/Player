import type { ReactElement } from "react";
import { CurrentPlayer } from "./CurrentPlayer";
import Playlist from "./PlayerList";

export const Player = () :ReactElement => {
    return (
        <div className="player">
        <Playlist />
        <CurrentPlayer />
        </div>
    );
    }