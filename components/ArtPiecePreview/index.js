import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, dimensions }) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={dimensions.width}
        height={dimensions.height}
      />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
