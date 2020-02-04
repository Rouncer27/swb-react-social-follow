import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(195, 42, 163, 1);
  color: rgba(195, 42, 163, 1);

  &:hover {
    background: rgba(195, 42, 163, 1);
    border-color: rgba(195, 42, 163, 1);
    color: #fff;
  }
`;

const Instagram = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaInstagram />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Instagram;
