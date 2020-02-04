import React from "react";
import styled from "styled-components";
import { FaSnapchatGhost } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(255, 252, 0, 1);
  color: rgba(255, 252, 0, 1);

  &:hover {
    background: rgba(255, 252, 0, 1);
    border-color: rgba(255, 252, 0, 1);
    color: #fff;
  }
`;

const Snapchat = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaSnapchatGhost />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Snapchat;
