import React from "react";

const Canteen = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="text-center px-6 py-10 bg-white shadow-lg rounded-lg border border-gray-300">
        {/* ASCII-style icon */}
        <pre className="text-blue-600 font-mono text-sm leading-tight mb-4">
          {String.raw`
   _______  _______  _______  __   __ 
  |       ||       ||       ||  |_|  |
  |  _____||   _   ||   _   ||       |
  | |_____ |  | |  ||  | |  ||       |
  |_____  ||  |_|  ||  |_|  ||       |
   _____| ||       ||       || ||_|| |
  |_______||_______||_______||_|   |_|
`}
        </pre>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-newyork">
          This page is coming soon
        </h1>
        <p className="text-sm text-gray-500">
          The Freshers section is under construction. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Canteen;
