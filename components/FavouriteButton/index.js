export default function FavouriteButton({
  artPiecesInfo,
  onToggleFavourite,
  slug,
}) {
  const { isFavourite } = artPiecesInfo?.find((info) => info.slug === slug) ?? {
    isFavourite: false,
  };
  return (
    <>
      <button
        type="button"
        onClick={() => onToggleFavourite(slug)}
        aria-label="favourite-button"
      >
        {isFavourite ? "👍" : "👎"}
      </button>
    </>
  );
}
