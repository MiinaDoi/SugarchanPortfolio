"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Collection = {
  name: string;
  description: string;
  image_url: string;
  opensea_url: string;
};

const GetCollection = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API_KEY || "",
          },
        };

        const response = await fetch(
          "https://api.opensea.io/api/v2/collections?chain=ethereum&creator_username=Sugarchan&include_hidden=false",
          options
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch collections: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.collections && Array.isArray(data.collections)) {
          const fetchedCollections = data.collections.map((collection: any) => ({
            name: collection.name || "Untitled Collection",
            description: collection.description || "No description provided.",
            image_url: collection.image_url || "/placeholder.png", // Fallback image
            opensea_url: collection.opensea_url,
          }));
          setCollections(fetchedCollections);
        } else {
          console.error("Invalid response structure for collections:", data);
        }
      } catch (error) {
        console.error("Failed to fetch collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 title-font ml-16">Collections</h2>
      {loading ? (
        <p className="text-center text-lg">Loading collections...</p>
      ) : collections.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 md:px-16 py-10 animate-fade-in">
          {collections.map((collection, index) => (
            <div key={index} className="text-left">
              <Image
                src={collection.image_url}
                alt={collection.name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
              <h3 className="mt-2 text-xl font-bold title-font">{collection.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{collection.description}</p>
              <a
                href={collection.opensea_url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-color hover:underline mt-2 inline-block"
              >
                View on OpenSea
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No collections found for this creator.</p>
      )}
    </section>
  );
};

export default GetCollection;
