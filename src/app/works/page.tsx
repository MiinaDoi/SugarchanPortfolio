"use client";

import React from "react";
import GetCollection from "../../components/GetCollection";
import GetNFTs from "../../components/GetNFTs";

const Works = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-24 px-10">
      <header className="flex justify-center">
        <h1 className="text-5xl font-bold mb-12 title-font">WORKS</h1>
      </header>
      <GetCollection />
      <GetNFTs />
    </div>
  );
};

export default Works;
