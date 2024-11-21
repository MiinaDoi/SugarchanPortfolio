import React from "react";

const newsItems = [
  {
    date: "May 27, 2023",
    title: "Starting Custom PFP Requests",
    description:
      "I am starting to take requests for custom PFPs (profile pictures).",
  },
  {
    date: "May 2, 2023",
    title: "Creatures#6 Bath was sold",
    description:
      "Creatures#6 Bath was sold on OpenSea at the price of 0.05 ETH",
  },
  {
    date: "May 2, 2023",
    title: "Creatures#3 School was sold",
    description:
      "Creatures#3 School was sold on OpenSea at the price of 0.05 ETH",
  },
  {
    date: "May 2, 2023",
    title: "Creatures#2 Discord was sold",
    description:
      "Creatures#2 Discord was sold on OpenSea at the price of 0.05 ETH",
  },
  {
    date: "April 15, 2023",
    title: "Creatures#5 Sandwich was sold",
    description:
      "Creatures#5 Sandwich was sold on OpenSea at the price of 0.05 ETH",
  },
  {
    date: "February 20, 2023",
    title: "List VerySilentFruits Collection on OpenSea",
    description:
      "I listed the second NFT collection, VerySilentFruits, on OpenSea. This collection consists of a total of 50 pieces.",
  },
  {
    date: "November 19, 2022",
    title: "Creatures1# Angel was sold",
    description:
      "Creatures1# Angel was sold on OpenSea at the price of 0.003 ETH",
  },
  {
    date: "June 10, 2022",
    title: "List The Creatures Cllection on OpenSea",
    description:
      "I listed the first NFT collection, The Creatures, on OpenSea. The Creatures consists of a total of 10 pieces.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-12 pt-24">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-12 title-font">NEWS</h1>
      </header>
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        {newsItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <p className="text-gray-500 text-sm">{item.date}</p>
            <h2 className="text-2xl font-semibold mt-2">{item.title}</h2>
            <p className="text-lg mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
