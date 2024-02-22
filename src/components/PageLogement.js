import React from 'react';
import { useParams } from 'react-router-dom';
import dataLogement from './logements.json';
import DetailLogement from './DetailLogement';
import Header from './Header';
import Footer from './Footer';
import PageError from './PageError';

function PageLogement() {
  const { id } = useParams();
  const logement = dataLogement.find(logement => logement.id === id);
  if (!logement) {
    return <PageError />;
  }

  return (
    <div>
      <div  className="HDFlogement" style={{ padding: '20px' }} >
        <Header />
        <DetailLogement logement={logement} />
      </div>
      <Footer />
    </div>
  );
}

export default PageLogement;
