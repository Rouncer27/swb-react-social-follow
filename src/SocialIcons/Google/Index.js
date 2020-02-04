import React from "react";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(66, 133, 244, 1);
  color: rgba(66, 133, 244, 1);

  &:hover {
    background: rgba(66, 133, 244, 1);
    border-color: rgba(66, 133, 244, 1);
    color: #fff;
  }
`;

const Google = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaGoogle />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Google;
