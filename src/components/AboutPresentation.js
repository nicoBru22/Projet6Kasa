import React from 'react';
import Collapse from '../components/Collapse';

function AboutPresentation() {
  return (
    <div>
      <Collapse titre="Fiabilité" contenu="Contenu de la section 1..." />
      <Collapse titre="Respect" contenu="Contenu de la section 2..." />
      <Collapse titre="Service" contenu="Contenu de la section 3..." />
      <Collapse titre="Sécurité" contenu="Contenu de la section 4..." />
    </div>
  );
}

export default AboutPresentation;