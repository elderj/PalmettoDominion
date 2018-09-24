import React, { Fragment } from 'react';
import logo from '../images/logo.png';

import '../styles/aligner.css';
import '../styles/fonts.css';

const HomePage = () => (
  <Fragment>
    <br />
    <div className="Aligner">
      <div className="Aligner-item">
        <h1 className="font-actionj">Palmetto Dominion Hot Sauce 🌙</h1>
      </div>
    </div>
    <div className="Aligner">
      <img
        src={logo}
        alt="Palmetto Dominion Hot Sauce Bottle"
        style={{
          height: '256px',
          margin: 10,
        }}
      />
    </div>
  </Fragment>
);

export default HomePage;
