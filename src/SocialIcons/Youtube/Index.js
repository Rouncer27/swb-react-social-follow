import React from "react";
import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(255, 0, 0, 1);
  color: rgba(255, 0, 0, 1);

  &:hover {
    background: rgba(255, 0, 0, 1);
    border-color: rgba(255, 0, 0, 1);
    color: #fff;
  }
`;

const Youtube = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaYoutube />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Youtube;
