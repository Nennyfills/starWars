import React from 'react';

import './footer.scss';

/**
 * Footer Component
 *  @param {string} message
 *  @returns footer element
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h4 className="footer_fonts">
        Copyright &copy; Star Wars
        {year}
      </h4>
    </div>
  );
};

export default Footer;
