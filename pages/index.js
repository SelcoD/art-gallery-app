import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("Failed to fetch data");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}

function ArtPieces({ pieces }) {
  return (
    <div>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              artist={piece.artist}
              title={piece.name}
              image={piece.imageSource}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
