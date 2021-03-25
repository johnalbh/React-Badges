import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div className="badge_section-name">
          <img
            className="badge_avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
          ></img>
          <h1>
            John <br /> López
          </h1>
        </div>
        <div className="badge_section-info">
          <p>Ingeniero Senior</p>
          <p>@johnlopezh</p>
        </div>
        <div className="badge_footer">#PrimeCurso</div>
      </div>
    );
  }
}

export default Badge;
