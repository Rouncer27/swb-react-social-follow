import React from "react";
import styled from "styled-components";

import Facebook from "./SocialIcons/Facebook/";
import Twitter from "./SocialIcons/Twitter/";
import Linkedin from "./SocialIcons/Linkedin/";
import Instagram from "./SocialIcons/Instagram/";
import Youtube from "./SocialIcons/Youtube/";
import Pinterest from "./SocialIcons/Pinterest/";
import Snapchat from "./SocialIcons/Snapchat/";
import Google from "./SocialIcons/Google/";

const DivStyled = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;

  div,
  a,
  svg {
    box-sizing: border-box;
  }
`;

const ExampleComponent = ({
  facebook = false,
  facebookUrl = "https://facebook.com/",
  twitter = false,
  twitterUrl = "https://twitter.com/",
  linkedin = false,
  linkedinUrl = "https://linkedin.com/",
  instagram = false,
  instagramUrl = "https://www.instagram.com/",
  youtube = false,
  youtubeUrl = "https://www.youtube.com/",
  pinterest = false,
  pinterestUrl = "https://www.pintrest.com/",
  snapchat = false,
  snapchatUrl = "https://www.snapchat.com/",
  google = false,
  googleUrl = "https://www.google.com/"
}) => {
  return (
    <DivStyled>
      {facebook && <Facebook url={facebookUrl} />}
      {twitter && <Twitter url={twitterUrl} />}
      {linkedin && <Linkedin url={linkedinUrl} />}
      {instagram && <Instagram url={instagramUrl} />}
      {youtube && <Youtube url={youtubeUrl} />}
      {pinterest && <Pinterest url={pinterestUrl} />}
      {snapchat && <Snapchat url={snapchatUrl} />}
      {google && <Google url={googleUrl} />}
    </DivStyled>
  );
};

export default ExampleComponent;
