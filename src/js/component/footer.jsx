import React from "react";
import PropTypes from 'prop-types';

export const Footer = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark footer-fixed">
      <div className="container-fluid">
        <div className="row text-center text-light justify-content-center w-100">
          <h5 className="text">Copy right © Your Website 2023</h5>
        </div>
      </div>
    </nav>
  );
};

export default Footer;