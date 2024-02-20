import React from 'react';
import Collapse from '../components/Collapse';

function AboutPresentation() {
  return (
    <div className='aboutPresentation'>
      <Collapse titreCollapse="Fiabilité" contenu="Contenu de la section Fiabilité" />
      <Collapse titreCollapse="Respect" contenu="Contenu de la section Respect" />
      <Collapse titreCollapse="Service" contenu="Contenu de la section Service" />
      <Collapse titreCollapse="Sécurité" contenu="Contenu de la section Sécurité"  />
    </div>
  );
}

export default AboutPresentation;