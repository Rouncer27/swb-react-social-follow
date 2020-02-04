import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(24, 119, 242, 1);
  color: rgba(24, 119, 242, 1);

  &:hover {
    background: rgba(24, 119, 242, 1);
    border-color: rgba(24, 119, 242, 1);
    color: #fff;
  }
`;

const Facebook = ({ iconType, url }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled
        iconType={iconType}
        target="_blank"
        rel="nooperner noreferrer"
        href={url}
      >
        <FaFacebookF />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Facebook;
