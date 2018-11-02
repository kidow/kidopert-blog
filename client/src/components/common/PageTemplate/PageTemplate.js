import React from 'react';
import './PageTemplate.scss'
import HeaderContainer from 'containers/common/HeaderContainer';
import FooterContainer from 'containers/common/FooterContainer';

const PageTemplate = ({ children }) => {
  return (
    <div className='page-template'>
      <HeaderContainer />
      <main>
        {children}
      </main>
      <FooterContainer />
    </div>
  );
};

export default PageTemplate;