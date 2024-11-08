import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa"; // You may need to install react-icons
import { FaX, FaXTwitter } from "react-icons/fa6";

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-4">
      <a
        href="https://www.instagram.com/sugarchanxoxo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/Sugarchanxoxo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900"
      >
        <FaXTwitter size={24} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;