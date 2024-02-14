import React, { useState } from 'react';

function Collapse({ titre, contenu }) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div>
        <button className='CollapseButton' onClick={toggleCollapse}>{collapsed ? `${titre}` : `${titre}`}</button>
        {!collapsed && (
          <div>
            {/* Contenu du collapse */}
            <p>{contenu}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Collapse;