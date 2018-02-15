import React from 'react';
import { Grid, Glyphicon, Navbar } from 'react-bootstrap/lib';

import './footer.css';

const Footer = () => (
  <Grid>
    <div className="l-footer">
      <label className="l-copyright">
        Taskboard <Glyphicon glyph="copyright-mark" />2018
      </label>
    </div>
  </Grid>
);

export default Footer;
