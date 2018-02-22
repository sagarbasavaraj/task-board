import React from 'react';
import { Grid, Glyphicon } from 'react-bootstrap/lib';

import { Span } from '../common';
import './footer.css';

const Footer = () => (
  <footer>
    <Grid>
      <div className="l-footer">
        <label className="l-copyright">
          <Span msg="brand" />
          <Glyphicon glyph="copyright-mark" />
          <Span msg="footer.copyright" />
        </label>
      </div>
    </Grid>
  </footer>
);

export default Footer;
