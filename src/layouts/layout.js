import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="l-main">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
