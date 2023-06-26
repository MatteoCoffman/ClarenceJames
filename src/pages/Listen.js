import Player from "../components/Player";
import "./Listen.css";

export default function Listen() {
  const albums = [{ uri: "2fjs85edQPLm8UFUzYNLfs", title: "Fucked Me Up" }];

  const tracks = [
    {
      uri: "2qZGBVIT6R0lBL1E9DkfqM?si=85394b6191864ace",
      title: "I'm Melting",
    },
    {
      uri: "03bnnlRI981SeYlaSPsYTp?si=8b9db6040f074c09",
      title: "I Think It Might Be Hell",
    },
    {
      uri: "2Xk3MunfpZwHSJktWNhRbz?si=1aaf7b6928204556",
      title: "Ronson Princess",
    },
    {
      uri: "7tAtJdUiYzjlZL6dOiNBRz?si=f2e9528ce92a431a",
      title: "Wait",
    },
    {
      uri: "0Z5zWMYRjcRmxWFPWKeTBj?si=dc6c8db362e7461c",
      title: "DeadFish",
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
