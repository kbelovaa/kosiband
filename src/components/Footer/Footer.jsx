import React from 'react';
import hameltenLogo from '../../images/logo_hamelten_braun.png';
import './Footer.scss';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer">
        <div className="footer__block">
          <p className="footer__text">For mer info - ta kontakt med din selger</p>
          <span className="footer__info">Thomas Olsen: +47 911 98 989</span>
          <span className="footer__info">thomas@kosiband.com</span>
          <span className="footer__info">Ulf Andreassen: +47 484 72 451</span>
          <span className="footer__info">ulf@kosiband.com</span>
        </div>
        <div className="footer__block">
          <img className="footer__logo" src={hameltenLogo} alt="Hamelten logo" />
          <span className="footer__info">Forhandlerportal:</span>
          <span className="footer__info">Hameltenpro.com</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
