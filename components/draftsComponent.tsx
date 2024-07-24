import React from 'react';

const DraftsComponent: React.FC = () => {
  return (
    <div className="p-5 border-b border-gray-600">
      <button className="w-full bg-blue-500 text-white py-2  hover:bg-blue-600 transition duration-200 mb-3">
        + New Draft
      </button>
      <p className="text-gray-700 mt-2">Drafts</p>
      <p className="text-gray-700 mt-2">Scheduled</p>
    </div>
  );
};

export default DraftsComponent;