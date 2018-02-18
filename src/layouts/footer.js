import React from 'react';
import { Grid, Glyphicon } from 'react-bootstrap/lib';

import './footer.css';

const Footer = () => (
  <footer>
    <Grid>
      <div className="l-footer">
        <label className="l-copyright">
          Taskboard <Glyphicon glyph="copyright-mark" />2018
        </label>
      </div>
    </Grid>
  </footer>
);

export default Footer;
