// src/app/works/page.tsx
import Image from "next/image";

const artworks = [
  { src: "/images/creature1.png", title: "Creatures#1 Angel" },
  { src: "/images/creature2.png", title: "Creatures#2 Discord" },
  { src: "/images/creature3.png", title: "Creatures#3 School" },
  { src: "/images/creature4.png", title: "Creatures#4 Unknown" },
];

const Works = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex justify-center p-6">
        <h1 className="text-4xl font-bold">WORKS</h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-16 py-10">
        {artworks.map((art, index) => (
          <div key={index} className="text-center">
            <Image
              src={art.src}
              alt={art.title}
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="mt-4 text-lg font-medium">{art.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
