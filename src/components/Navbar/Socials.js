import SocialsLink from "./SoccialsLink";
import { faSpotify, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <ul className="Social-Link-Container">
        <SocialsLink name={faSpotify} link="https://open.spotify.com/artist/2eAs72bbxVWJpvHnwvDBJT"/>
        <SocialsLink name={ faTwitter} link="https://twitter.com/bbangeroftheday"/>
        <SocialsLink name={faYoutube} link="https://www.youtube.com/channel/UCgUiy2FbVs0LqSPkmCXL-8Q"/>
        <SocialsLink name={faInstagram} link="https://www.instagram.com/_bangeroftheday/"/>
    </ul>

  )
}

export default Socials