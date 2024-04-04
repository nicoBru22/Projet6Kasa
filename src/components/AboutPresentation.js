import React from 'react';
import Collapse from '../components/Collapse';

function AboutPresentation() {
  return (
    <div className='aboutPresentation'>
      <Collapse 
        titreCollapse="Fiabilité" 
        contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
        aux logements, ettoutes les informations sont régulièrement vérifiées par nos équipes." />
      <Collapse 
        titreCollapse="Respect" 
        contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
      <Collapse 
        titreCollapse="Service" 
        contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
      <Collapse 
        titreCollapse="Sécurité" 
        contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos 
        voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
        que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes. "  />
    </div>
  );
}

export default AboutPresentation;