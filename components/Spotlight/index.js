import Image from "next/image";

export default function Spotlight({ image, artist, pieces }) {
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h2>Art Gallery!</h2>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.name}
        width={200}
        height={200}
      />
      <p> {randomArtPiece.artist} </p>
    </>
  );
}
