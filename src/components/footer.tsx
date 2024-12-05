import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 text-center text-gray-500">
      {/* Centered line */}
      <div className="flex justify-center items-center">
        <hr className="w-4/5 border-t border-gray-200" />
      </div>
      {/* Footer text with spacing */}
      <p className="mt-4 mb-7 text-sm title-font">© Sugarchan 2024</p>
    </footer>
  );
};

export default Footer;
