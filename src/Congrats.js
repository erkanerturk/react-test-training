import React from 'react';

const Congrats = ({ success, ...otherProps }) => {
  return (
    <React.Fragment>
      {success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">Congratulation</span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </React.Fragment>
  );
};

export default Congrats;
