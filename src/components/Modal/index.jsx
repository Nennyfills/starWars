import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

import InfoBox from '../InfoBox';

/**
 * AppModal Component
 *  @param {func} onCloseModal
 *  @param {bool} open
 *  @param {bool} isError
 *  @param {node} html
 *  @returns infoBox element
 */
const AppModal = ({
  open,
  onCloseModal,
  html,
  isError,
}) => (

  <Modal open={open} onClose={onCloseModal} center>
    { isError
    && <InfoBox message={isError} />}
    <div>{html}</div>
  </Modal>
);

AppModal.propTypes = {
  open: PropTypes.bool,
  onCloseModal: PropTypes.func,
  html: PropTypes.element,
  isError: PropTypes.string,
};
AppModal.defaultProps = {
  open: false,
  onCloseModal: () => false,
  html: <div />,
  isError: null,
};

export default AppModal;
