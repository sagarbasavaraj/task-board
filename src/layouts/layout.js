import React from 'react';
import { node } from 'prop-types';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="l-main">
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: node
};

export default Layout;
