export default function Player({ Uri, type }) {
  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/${type}/${Uri}`}
        title="Spotify Player"
        width={300}
        height={380}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
