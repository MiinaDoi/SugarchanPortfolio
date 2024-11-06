import React from "react";

const newsItems = [
  {
    date: "November 6, 2024",
    title: "New Artwork Released",
    description:
      "I just released a new piece in the Creatures series, titled 'Angel.' Check it out in the Works section!",
  },
  {
    date: "October 25, 2024",
    title: "Exhibition Announcement",
    description:
      "Excited to announce my upcoming exhibition in Tokyo. More details coming soon!",
  },
  {
    date: "September 15, 2024",
    title: "Interview with Sugarchan",
    description:
      "I had an interview with Art Weekly where I discussed my creative process. Read it on their website!",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-12">NEWS</h1>
      </header>
      <div className="max-w-3xl mx-auto space-y-8">
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
