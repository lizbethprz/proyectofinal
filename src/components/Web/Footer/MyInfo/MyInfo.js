import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Perez Curiel Lizbeth" />
      <h4>
      Sistema web para el control y 
        almacenamiento 
        de objetos de aprendizaje.
      </h4>
      <SocialLink />
    </div>
  );
}
