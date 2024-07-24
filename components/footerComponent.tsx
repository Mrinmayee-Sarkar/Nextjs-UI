import React from 'react';

const FooterComponent: React.FC = () => {
  return (
    <div className="p-5 space-y-2">
      <p className="text-gray-700 mt-1">Upgrade</p>
      <p className="text-gray-700 mt-2">Documentation</p>
      <p className="text-gray-700 mt-3 ">Feedback</p>
    </div>
  );
};

export default FooterComponent;