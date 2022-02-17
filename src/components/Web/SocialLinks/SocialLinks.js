import React from "react";
import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/watch?v=yJODNVyf6t8&feature=emb_title"
        className="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://twitter.com/TecNMTijuana"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.facebook.com/TecNMTijuana/"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
    </div>
  );
}
