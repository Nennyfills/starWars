import React from 'react';

import './spinner.scss';

/**
 * Spinner Component
 *  @returns spinner element
 */
const Spinner = () => (

  <div className="spinner">
    <div className="spinner-sector spinner-sector-one" />
    <div className="spinner-sector spinner-sector-two" />
    <div className="spinner-sector spinner-sector-three" />
  </div>
);

export default Spinner;
