import DraftsComponent from '@/components/draftsComponent';
import FooterComponent from '@/components/footerComponent';
import HeaderComponent from '@/components/headerComponent';
import InspirationComponent from '@/components/inspirationComponent';
import React from 'react';


const Sidebar: React.FC = () => {
  return (
    <div className="w-72 border border-gray-700 rounded-lg shadow-sm">
     <HeaderComponent></HeaderComponent>
     <DraftsComponent></DraftsComponent>
     <InspirationComponent></InspirationComponent>
     <FooterComponent></FooterComponent>
    </div>
  );
};

export default Sidebar;