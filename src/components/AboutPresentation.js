import React from 'react';
import Collapse from '../components/Collapse';

function AboutPresentation() {
  return (
    <div className='aboutPresentation'>
      <Collapse titreCollapse="Fiabilité" contenu="Contenu de la section 1..." />
      <Collapse titreCollapse="Respect" contenu="Contenu de la section 2..." />
      <Collapse titreCollapse="Service" contenu="Contenu de la section 3..." />
      <Collapse titreCollapse="Sécurité" contenu="Contenu de la section 4..."  />
    </div>
  );
}

export default AboutPresentation;