// src/components/ConditionalFooter.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./footer";

const ConditionalFooter: React.FC = () => {
  const pathname = usePathname();

  // Only render the Footer if the path is not "/"
  if (pathname === "/") return null;

  return <Footer />;
};

export default ConditionalFooter;
