import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Info from './Info';
import './styles/Content.scss';

const Content = () => {
  const [personId, setPersonId] = useState(null);

  return (
    <div className="content">
      <div className="content-sidebar">
        <Sidebar onPersonClick={(person) => setPersonId(person.id)} />
      </div>
      <div className="content-information">
        <Info personId={personId} />
      </div>
    </div>
  );
};

export default Content;
