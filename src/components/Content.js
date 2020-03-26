import React from 'react';

import Sidebar from './Sidebar';
import Information from './Information';
import './styles/Content.css';

const Content = () => (
  <div className="content">
    <div className="content-sidebar">
      <Sidebar />
    </div>
    <div className="content-information">
      <Information />
    </div>
  </div>
);

export default Content;
