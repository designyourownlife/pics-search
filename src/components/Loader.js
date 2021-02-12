import React from 'react';
import loaderSVG from "../assets/img/loader.svg";
import './Loader.css';

function Loader({styles}) {
  return (
    <div className={`loaderImage ${styles}`}>
        <img src={loaderSVG} id="loader" alt="" />
    </div>
  )
}

export default Loader
