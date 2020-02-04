import React from "react";
import styled from "styled-components";
import { FaPinterestP } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(189, 8, 28, 1);
  color: rgba(189, 8, 28, 1);

  &:hover {
    background: rgba(189, 8, 28, 1);
    border-color: rgba(189, 8, 28, 1);
    color: #fff;
  }
`;

const Pinterest = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaPinterestP />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Pinterest;
