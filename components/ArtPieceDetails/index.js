import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <h2>Details</h2>
      <button>
        <Link href="/art-pieces">Go back</Link>
      </button>
      <Image src={image} alt={title} width={200} height={200} />
      <h3>
        {title} ({year})
      </h3>
      <h4>Artist: {artist}</h4>
      <h4>Genre: {genre}</h4>
    </>
  );
}
