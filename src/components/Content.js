import React from 'react';

import Sidebar from './Sidebar';
import Info from './Info';
import './styles/Content.css';

const Content = () => (
  <div className="content">
    <div className="content-sidebar">
      <Sidebar />
    </div>
    <div className="content-information">
      <Info />
    </div>
  </div>
);

export default Content;
