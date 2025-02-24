import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';

const BasicLayout: React.FC = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const permissions = localStorage.getItem('permissions');
    if (permissions) {
      setMenuItems(JSON.parse(permissions));
    }
  }, []);

  return (
    <div>
      <Menu mode="horizontal" items={menuItems} />
      {children}
    </div>
  );
};

export default BasicLayout;
