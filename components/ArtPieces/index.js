import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              artist={piece.artist}
              title={piece.name}
              image={piece.imageSource}
              dimensions={piece.dimensions}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
