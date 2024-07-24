import React from 'react';
import { CircleUserRound } from 'lucide-react';

const HeaderComponent: React.FC = () => {
  return (
    <div className="p-5 border-b border-gray-600 bg-gray-100 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">P</span>
        <span className=" font-semibold">Personal</span>
      </div>
      <div>/</div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-gray-600">Default project</span>
      </div>
    </div>
  );
};

export default HeaderComponent;