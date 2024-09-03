import React from 'react';

const Header = () => {
  return (
    <div className="flex items-start justify-between p-4 bg-gray-50  ">
      <div className="text-left w-1/4 mx-8">
        <h1 className="text-6xl font-bold font-serif leading-none tracking-tight text-gray-900">IET</h1>
        <h2 className="text-6xl font-bold font-serif leading-none tracking-tight text-gray-900">CLUBS</h2>
      </div>
      <div className="flex-1 text-left  text-gray-700 w-3/4">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed.
        </p>
      </div>
    </div>
  );
};

export default Header;
