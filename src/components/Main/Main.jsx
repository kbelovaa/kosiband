import React, { useState } from 'react';
import backgroundImg from '../../images/background.png';
import logo from '../../images/logo.png';
import hameltenLogo from '../../images/logo_hamelten.png';
import item1 from '../../images/item1.png';
import item2 from '../../images/item2.png';
import item3 from '../../images/item3.png';
import Footer from '../Footer/Footer';
import './Main.scss';

const Main = () => {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className="main">
      <section className="banner" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <img className="banner__logo" src={logo} alt="Kosiband logo" />
        <h1 className="banner__title">High-tech tie</h1>
      </section>
      <section className="info-section">
        <div className="container">
          <div className="info">
            <div className="circle circle_1"></div>
            <div className="circle circle_2"></div>
            <div className="circle circle_3"></div>
            <div className="circle circle_4"></div>
            <div className="info__block info__focus">
              <h2 className="info__title title">Free to focus</h2>
              <p className="info__text">A strong and loyal little helper</p>
              <p className="info__text">
                Exceptionally strong yet smoothly elastic, long lived Kosiband® is gentle on your hair, has a great fit
                - and won’t budge even during your most intensive excercise sessions.
              </p>
              <p className="info__text">Kosiband® comes in a wide variety of colors.</p>
            </div>
            <div className="circle circle_5"></div>
            <div className="circle circle_6"></div>
            <div className="circle circle_7"></div>
            <div className="info__block info__outfit">
              <h2 className="info__title title">Match your outfit with Kosiband®</h2>
              <div className="info__list">
                <span className="info__list-item">Sport</span>
                <span className="info__list-item">Celebration</span>
                <span className="info__list-item">Mama</span>
                <span className="info__list-item">Play</span>
                <span className="info__list-item">Hair extention</span>
                <span className="info__list-item">Sleep</span>
              </div>
            </div>
            <div className="circle circle_8"></div>
            <div className="circle circle_9"></div>
            <div className="circle circle_10"></div>
            <div className="info__block info__hamelten">
              <img className="info__logo" src={hameltenLogo} alt="Hamelten logo" />
              <p className="info__text">
                Kosiband lanseres av Fred Hamelten AS, som tidligere har lansert på det norske markedet Fred Hamelten
                Norway og Biosil® - Advanced Collagen GeneratorTM. Vårt hovedfokus er kompromissløs kvalitet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages-section">
        <div className="container">
          <div className="advantages">
            <h2 className="advantages__title title">Advantages</h2>
            <ul className={`advantages__list ${learnMore ? 'expanded' : ''}`}>
              <li className="advantages__item">
                <span className="advantages__item-nr">01</span>
                <p className="advantages__item-text">Skånsom mot håret</p>
              </li>
              <li className="advantages__item">
                <span className="advantages__item-nr">02</span>
                <p className="advantages__item-text">Sterk - tåler drag opp til 6,9 kg uten å ryke</p>
              </li>
              <li className="advantages__item">
                <span className="advantages__item-nr">03</span>
                <p className="advantages__item-text">Sitter som støpt - selv på glatt hår</p>
              </li>
              <li className="advantages__item">
                <span className="advantages__item-nr">04</span>
                <p className="advantages__item-text">Lugger ikke og gir ikke vondt i hodebunnen</p>
              </li>
              <li className={`advantages__item ${learnMore ? '' : 'invisible'}`}>
                <span className="advantages__item-nr">05</span>
                <p className="advantages__item-text">Inneholder naturgummi og er OEKO-TEX sertifisert</p>
              </li>
              <li className={`advantages__item ${learnMore ? '' : 'invisible'}`}>
                <span className="advantages__item-nr">06</span>
                <p className="advantages__item-text">Unik high-tech sveiseteknikk gjør den mer skånsom for håret</p>
              </li>
              <li className={`advantages__item ${learnMore ? '' : 'invisible'}`}>
                <span className="advantages__item-nr">07</span>
                <p className="advantages__item-text">Perfekt også for tynt, fint nordisk hår & hair extensions</p>
              </li>
              <li className={`advantages__item ${learnMore ? '' : 'invisible'}`}>
                <span className="advantages__item-nr">08</span>
                <p className="advantages__item-text">Varer lenge takket være god elastikk og en unik sveiseteknikk</p>
              </li>
            </ul>
            {!learnMore && (
              <span className="advantages__btn" onClick={() => setLearnMore(true)}>
                Learn more
              </span>
            )}
          </div>
        </div>
      </section>
      <section className="types-section">
        <div className="container">
          <div className="types">
            <div className="circle circle_11"></div>
            <div className="circle circle_12"></div>
            <div className="circle circle_13"></div>
            <div className="circle circle_14"></div>
            <div className="sizes">
              <h2 className="sizes__title title">Sizes</h2>
              <div className="sizes__block-wrap">
                <div className="sizes__block">
                  <img className="sizes__img" src={item1} alt="Large" />
                  <img className="sizes__img" src={item2} alt="Large" />
                  <span className="types__label">Large</span>
                  <span className="types__text">Kun ensfarget</span>
                </div>
                <div className="sizes__block">
                  <img className="sizes__img" src={item3} alt="Medium" />
                  <span className="types__label">Medium</span>
                  <span className="types__text">Ensfarget eller flerfarget</span>
                </div>
              </div>
            </div>
            <div className="circle circle_15"></div>
            <div className="colors">
              <h2 className="colors__title title">4 ulike kolleksjoner</h2>
              <div className="colors__wrap">
                <div className="colors__item">
                  <div className="colors__palette">
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                  </div>
                  <span className="types__label">Happy</span>
                  <span className="types__text">Klare og sterke farger</span>
                </div>
                <div className="colors__item">
                  <div className="colors__palette">
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                  </div>
                  <span className="types__label">Neon</span>
                  <span className="types__text">Neonfarger</span>
                </div>
                <div className="colors__item">
                  <div className="colors__palette">
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                  </div>
                  <span className="types__label">Classic</span>
                  <span className="types__text">Jordtoner</span>
                </div>
                <div className="colors__item">
                  <div className="colors__palette">
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                    <div className="colors__color"></div>
                  </div>
                  <span className="types__label">Cotton Candy</span>
                  <span className="types__text">Søte lyse farger</span>
                </div>
              </div>
            </div>
            <div className="circle circle_16"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
