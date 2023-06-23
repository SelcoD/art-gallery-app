export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
