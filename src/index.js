import React from "react";
import styled from "styled-components";

import initialState from "./initialState";

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

const Icons = ({ ...options }) => {
  const iconType = options.iconType ? options.iconType : initialState.iconType;
  const facebook = options.facebook ? options.facebook : initialState.facebook;
  const facebookUrl = options.facebookUrl
    ? options.facebookUrl
    : initialState.facebookUrl;
  const twitter = options.twitter ? options.twitter : initialState.twitter;
  const twitterUrl = options.twitterUrl
    ? options.twitterUrl
    : initialState.twitterUrl;
  const linkedin = options.linkedin ? options.linkedin : initialState.linkedin;
  const linkedinUrl = options.linkedinUrl
    ? options.linkedinUrl
    : initialState.linkedinUrl;
  const instagram = options.instagram
    ? options.instagram
    : initialState.instagram;
  const instagramUrl = options.instagramUrl
    ? options.instagramUrl
    : initialState.instagramUrl;
  const youtube = options.youtube ? options.youtube : initialState.youtube;
  const youtubeUrl = options.youtubeUrl
    ? options.youtubeUrl
    : initialState.youtubeUrl;
  const pinterest = options.pinterest
    ? options.pinterest
    : initialState.pinterest;
  const pinterestUrl = options.pinterestUrl
    ? options.pinterestUrl
    : initialState.pinterestUrl;
  const snapchat = options.snapchat ? options.snapchat : initialState.snapchat;
  const snapchatUrl = options.snapchatUrl
    ? options.snapchatUrl
    : initialState.snapchatUrl;
  const google = options.google ? options.google : initialState.google;
  const googleUrl = options.googleUrl
    ? options.googleUrl
    : initialState.googleUrl;
  return (
    <DivStyled>
      {facebook && <Facebook iconType={iconType} url={facebookUrl} />}
      {twitter && <Twitter iconType={iconType} url={twitterUrl} />}
      {linkedin && <Linkedin iconType={iconType} url={linkedinUrl} />}
      {instagram && <Instagram iconType={iconType} url={instagramUrl} />}
      {youtube && <Youtube iconType={iconType} url={youtubeUrl} />}
      {pinterest && <Pinterest iconType={iconType} url={pinterestUrl} />}
      {snapchat && <Snapchat iconType={iconType} url={snapchatUrl} />}
      {google && <Google iconType={iconType} url={googleUrl} />}
    </DivStyled>
  );
};

export default Icons;
