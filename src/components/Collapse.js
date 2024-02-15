import React, { useState } from 'react';
import '../style/Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ titreCollapse, contenu,}) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div className='collapseGlobal'>
        <button className='CollapseButton' onClick={toggleCollapse}>
          <div>{titreCollapse}</div>
          <div>{collapsed ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
          </div>
        </button>
        {!collapsed && (
          <div>
            <p>{contenu}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Collapse;