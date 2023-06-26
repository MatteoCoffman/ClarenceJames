import Player from "../components/Player";
import "./Listen.css";

export default function Listen() {
  const albums = [{ uri: "2fjs85edQPLm8UFUzYNLfs", title: "Fucked Me Up" }];

  const tracks = [
    {
      uri: "03bnnlRI981SeYlaSPsYTp?si=8b9db6040f074c09",
      title: "I Think It Might Be Hell",
    },
  ];

  return (
    <div>
      <div className="player-container">
        {albums.map((album) => (
          <div key={album.uri} className="player-item">
            <h2>{album.title}</h2>
            <Player Uri={album.uri} type="album" />
          </div>
        ))}
        {tracks.map((track) => (
          <div key={track.uri} className="player-item">
            <h2>{track.title}</h2>
            <Player Uri={track.uri} type="track" />
          </div>
        ))}
      </div>
    </div>
  );
}
