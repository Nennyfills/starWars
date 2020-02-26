import React from 'react';
import PropTypes from 'prop-types';

import './pagination.scss';
import Button from '../Button';

/**
 * Pagination Component
 *  @param {func} previous
 *  @param {func} next
 *  @param {bool} previousPage
 *  @param {bool} nextPage
 *  @returns pagination element
 */
const Pagination = ({
  previous, next, previousPage, nextPage,
}) => (
  <div className="pagination">
    <Button handleClick={previous} button="button" disabled={!previousPage} name="❮" />
    <Button handleClick={next} button="button" disabled={!nextPage} name="❯" />
  </div>
);

Pagination.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
  previousPage: PropTypes.string,
  nextPage: PropTypes.string,
};
Pagination.defaultProps = {
  previous: () => '',
  next: () => '',
  previousPage: '',
  nextPage: '',
};

export default Pagination;
