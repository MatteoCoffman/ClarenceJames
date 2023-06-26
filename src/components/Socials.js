import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Socials.css";

export default function Socials() {
  return (
    <div className="socials">
      <a
        href="https://open.spotify.com/artist/30nbBAeNkY3259wf4QCn9v"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSpotify} className="iconStyle" />
      </a>
      <a
        href="https://www.instagram.com/clarencejamesmusic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="iconStyle" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCUu0bHjHvPZyYivqcA15wEQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} className="iconStyle" />
      </a>
      <a
        href="https://www.facebook.com/ClarenceJamesMusic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="iconStyle" />
      </a>
    </div>
  );
}
