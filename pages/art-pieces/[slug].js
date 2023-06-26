import ArtPieceDetails from "@/components/ArtPieceDetails";
import ArtPieces from "@/components/ArtPieces";
import { useRouter } from "next/router";

export default function DetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPieceDetails = pieces.find((piece) => piece.slug === slug);

  if (!artPieceDetails) {
    return null;
  }

  return (
    <div>
      <ArtPieceDetails
        image={artPieceDetails.imageSource}
        title={artPieceDetails.name}
        artist={artPieceDetails.artist}
        genre={artPieceDetails.genre}
        year={artPieceDetails.year}
      />
    </div>
  );
}
