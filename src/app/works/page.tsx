// src/app/works/page.tsx
import Image from "next/image";

const artworks = [
  { src: "/images/Creatures/Creatures1.JPEG", title: "Creatures#1 Angel" },
  { src: "/images/Creatures/Creatures2.JPEG", title: "Creatures#2 Discord" },
  { src: "/images/Creatures/Creatures3.JPEG", title: "Creatures#3 School" },
  { src: "/images/Creatures/Creatures4.JPEG", title: "Creatures#4 Rabbit" },
  { src: "/images/Creatures/Creatures5.JPEG", title: "Creatures#5 Sandwich" },
  { src: "/images/Creatures/Creatures6.JPEG", title: "Creatures#6 Bath" },
  { src: "/images/Creatures/Creatures7.JPEG", title: "Creatures#7 Chocolate" },
  { src: "/images/Creatures/Creatures8.JPEG", title: "Creatures#8 Gender" },
  { src: "/images/Creatures/Creatures9.JPG", title: "Creatures#9 Sexuality" },
  { src: "/images/Creatures/Creatures10.JPEG", title: "Creatures#10 Doll" },
];

const Works = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-24 px-10">
      <header className="flex justify-center">
        <h1 className="text-5xl font-bold mb-12 title-font">WORKS</h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-16 py-10 animate-fade-in">
        {artworks.map((art, index) => (
          <div key={index} className="text-left">
            <Image
              src={art.src}
              alt={art.title}
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="mt-2 text-lg font-light title-font">{art.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
