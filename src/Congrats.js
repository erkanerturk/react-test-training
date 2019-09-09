import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success, ...otherProps }) => {
  return (
    <React.Fragment>
      {success ? (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">Congratulation</span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </React.Fragment>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
