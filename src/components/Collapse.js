import React, { useState } from 'react';
import '../style/Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ titreCollapse, contenu,}) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div className='collapseGlobal'>
        <button className='CollapseButton' onClick={toggleCollapse}>
          <div className='titreCollapse'>{titreCollapse}</div>
          <div className='iconeConteneur' style={{ transform: `rotate(${collapsed ? 0 : 180}deg)` }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
        {!collapsed && (
          <div className='divContenuCollapse'>
            <p className='contenuCollapse'>{contenu}</p>
          </div>
        )}
      </div>
    );
}
  
  export default Collapse;