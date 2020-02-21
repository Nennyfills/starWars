import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';
import Button from '../Button';

/**
 * Card Component
 *  @param {string} message
 *  @param {bool} horizontal
 *  @param {string} name
 *  @param {string} birthYear
 *  @param {func} openModal
 *  @param {string} gender
 *  @param {string} films
 *  @param {string} species
 *  @param {string} vehicles
 *  @param {string} starShips
 *  @param {string} showEachFilm
 *  @param {string} showEachSpecies
 *  @param {string} showEachStarShips
 *  @param {string} showEachVehicles
 *  @returns card element
 */
export const Card = ({
  horizontal,
  name,
  birthYear,
  gender,
  openModal,
  films,
  species,
  vehicles,
  starShips,
  showEachFilm,
  showEachSpecies,
  showEachStarShips,
  showEachVehicles,
}) => (
  <div className="card">
    {!horizontal ? (
      <section className="card_vertical">
        <article className="vertical_design">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
            alt="loading"
          />
        </article>
        <div className="fonts_card">
          <div className="fonts_detail">
            <div className="fonts_name">{name}</div>
            <div className="fonts_gender">{gender}</div>
            <div className="fonts_birth">{birthYear}</div>
          </div>
          <div className="fonts_view">
            <Button handleClick={openModal} button="view_btn" name="View" />
          </div>
        </div>
      </section>
    ) : (
      <section className="card_horizontal">
        <article className="card_horizontal-left">
          {showEachFilm || showEachSpecies || showEachStarShips || showEachVehicles || (
            <>
              <div>
                <h3>Films</h3>
                <div>{films}</div>
              </div>
              <div>
                <h3>Species</h3>
                <div>{species}</div>
              </div>
              <div>
                <h3>Vehicles</h3>
                <div>{vehicles}</div>
              </div>
              <div>
                <h3>Star Ships</h3>
                <div>{starShips}</div>
              </div>
            </>
          )}
        </article>
      </section>
    )}
  </div>
);

Card.propTypes = {
  horizontal: PropTypes.bool,
  name: PropTypes.string,
  birthYear: PropTypes.string,
  gender: PropTypes.string,
  openModal: PropTypes.func,
  films: PropTypes.string,
  species: PropTypes.string,
  vehicles: PropTypes.string,
  starShips: PropTypes.string,
  showEachFilm: PropTypes.string,
  showEachSpecies: PropTypes.string,
  showEachStarShips: PropTypes.string,
  showEachVehicles: PropTypes.string,
};
Card.defaultProps = {
  horizontal: false,
  name: 'Unavailable',
  birthYear: 'Unavailable',
  gender: 'Unavailable',
  openModal: () => '',
  films: 'Unavailable',
  species: 'Unavailable',
  vehicles: 'Unavailable',
  starShips: '',
  showEachFilm: '',
  showEachSpecies: '',
  showEachStarShips: '',
  showEachVehicles: '',
};

export default Card;
