import React from 'react';
import './PageTemplate.scss'
import Footer from 'components/common/Footer';
import HeaderContainer from 'containers/common/HeaderContainer';

const PageTemplate = ({ children }) => {
  return (
    <div className='page-template'>
      <HeaderContainer />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;