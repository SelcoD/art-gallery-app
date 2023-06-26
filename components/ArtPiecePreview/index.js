import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <Link href={`art-pieces/${slug}`}>
        <Image src={image} alt={title} width={200} height={200} />
      </Link>
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
