export default FavouriteButton({isFavourite, onToggleFavourite}){
    return (
<>
<button type="button" onClick={onToggleFavourite} aria-label="favourite-button">
{isFavourite ? "👍" : "👎"}
</button>
</>
    );
}