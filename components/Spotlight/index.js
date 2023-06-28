import Image from "next/image";
import FavouriteButton from "../FavouriteButton";

export default function Spotlight({ pieces, isFavourite, onToggleFavourite }) {
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
      <FavouriteButton
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
      ></FavouriteButton>
    </>
  );
}
