import React from 'react';
import PropTypes from 'prop-types';

import './infoBox.scss';

/**
 * InfoBox Component
 *  @param {string} message
 *  @returns infoBox element
 */
const InfoBox = ({ message }) => (
  <div className="infoBox">
    <div className="error">
      <i className="fa fa-times-circle" />
      {message}
    </div>
  </div>
);

InfoBox.propTypes = {
  message: PropTypes.string,
};
InfoBox.defaultProps = {
  message: '',
};
export default InfoBox;
