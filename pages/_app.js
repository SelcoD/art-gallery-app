import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

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

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavourite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((artPieceInfo) =>
          artPieceInfo.slug === slug
            ? { ...artPieceInfo, isFavourite: !artPieceInfo.isFavourite }
            : artPieceInfo
        );
      }
      return [...artPiecesInfo, { slug, isFavourite: true }];
    });
  }

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        onToggleFavourite={handleToggleFavourite}
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
