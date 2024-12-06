"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type NFT = {
  identifier: string;
  name: string;
  image_url: string;
  opensea_url: string;
};

const GetNFTs = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API_KEY || "",
          },
        };

        const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

        const response = await fetch(
          `https://api.opensea.io/api/v2/chain/ethereum/account/${walletAddress}/nfts?limit=10`,
          options
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch NFTs: ${response.status}`);
        }

        const data = await response.json();

        if (data && Array.isArray(data.nfts)) {
          const fetchedNFTs = data.nfts.map((nft: any) => ({
            identifier: nft.identifier,
            name: nft.name || "Untitled NFT",
            image_url: nft.image_url || "/placeholder.png", // Fallback image
            opensea_url: nft.opensea_url || "#",
          }));
          setNFTs(fetchedNFTs);
        } else {
          console.error("Invalid response structure for NFTs:", data);
        }
      } catch (error) {
        console.error("Failed to fetch NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 title-font ml-16 mt-10">NFTs</h2>
      {loading ? (
        <p className="text-center text-lg">Loading NFTs...</p>
      ) : nfts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 md:px-16 py-10 animate-fade-in">
          {nfts.map((nft) => (
            <div key={nft.identifier} className="text-left">
              <Image
                src={nft.image_url}
                alt={nft.name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
              <h3 className="mt-2 text-xl font-bold title-font">{nft.name}</h3>
              <a
                href={nft.opensea_url}
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
        <p className="text-center text-lg">No NFTs found for this account.</p>
      )}
    </section>
  );
};

export default GetNFTs;
