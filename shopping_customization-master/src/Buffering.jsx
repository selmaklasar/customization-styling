import React from 'react';
import style from './Buffering.module.css'; // Import CSS file for styling

const BufferingAnimation = ({ isBuffering }) => {
  return isBuffering ? (
    <div>
     
      <div className={style.spinner}>
      <h1>LOGO</h1>
      </div>
     
    </div>
  ) : null;
};

export default BufferingAnimation;