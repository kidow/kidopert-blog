import React from 'react';
import './PageTemplate.scss'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer';

const PageTemplate = ({ children }) => {
  return (
    <div className='page-template'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;