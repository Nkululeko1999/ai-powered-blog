import React from 'react';

const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-300 rounded-md h-full w-full"></div>
    </div>
  );
};

export default Skeleton;
