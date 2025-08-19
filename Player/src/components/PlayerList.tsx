import  { type ReactElement } from "react";
import PlaylistItem from "./PlayListItem";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const playlistData = [
  { id: 1, artist: "Ludwig van Beethoven", song: "Symphony No. 5", img: img1, active: true },
  { id: 2, artist: "Wolfgang Amadeus Mozart", song: "Eine kleine Nachtmusik", img: img2 },
  { id: 3, artist: "Johann Sebastian Bach", song: "Toccata and Fugue in D minor", img: img3 },
  { id: 4, artist: "Pyotr Ilyich Tchaikovsky", song: "Swan Lake", img: img4 },
  { id: 5, artist: "Antonio Vivaldi", song: "The Four Seasons: Spring", img: img5 },
  { id: 6, artist: "Franz Schubert", song: "Ave Maria", img: img6 },
  { id: 7, artist: "Claude Debussy", song: "Clair de Lune", img: img7 },
  { id: 8, artist: "George Frideric Handel", song: "Messiah: Hallelujah Chorus", img: img8 },
];


const Playlist = ():ReactElement => {
  return (
    <div className="playlist">
      {playlistData.map(item => (
        <PlaylistItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Playlist;
