"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Artwork = {
  imageUrl: string;
  title: string;
};

const Works = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API_KEY || "",
          },
        };

        // Corrected API URL
        const response = await fetch(
          "https://api.opensea.io/api/v1/assets?collection_slug=msi1201-collection&limit=20",
          options
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.assets && Array.isArray(data.assets)) {
          const fetchedArtworks = data.assets.map((asset: any) => ({
            imageUrl: asset.image_url || "/placeholder.png", // Fallback image
            title: asset.name || "Untitled",
          }));
          setArtworks(fetchedArtworks);
        } else {
          console.error("Invalid response structure:", data);
        }
      } catch (error) {
        console.error("Failed to fetch artworks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-24 px-10">
      <header className="flex justify-center">
        <h1 className="text-5xl font-bold mb-12 title-font">WORKS</h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-16 py-10 animate-fade-in">
        {loading ? (
          <p className="col-span-full text-center text-lg">
            Loading artworks...
          </p>
        ) : artworks.length > 0 ? (
          artworks.map((art, index) => (
            <div key={index} className="text-left">
              <Image
                src={art.imageUrl}
                alt={art.title}
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
              <p className="mt-2 text-lg font-light title-font">{art.title}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg">
            No artworks found for this collection.
          </p>
        )}
      </div>
    </div>
  );
};

export default Works;
