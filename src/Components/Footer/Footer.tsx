import React from "react";

import './Footer.scss';

function Footer() {
  return(
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        {/* © 2020 Copyright: */}
        <a className="text-dark" href="/">Das A Team</a>
      </div>
    </footer>
  );
}

export default Footer;
