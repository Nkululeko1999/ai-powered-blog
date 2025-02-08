import React from 'react';

const CardHeader = ({ title, subtitle, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default CardHeader;
