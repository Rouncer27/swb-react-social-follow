import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(29, 161, 242, 1);
  color: rgba(29, 161, 242, 1);

  &:hover {
    background: rgba(29, 161, 242, 1);
    border-color: rgba(29, 161, 242, 1);
    color: #fff;
  }
`;

const Twitter = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaTwitter />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Twitter;
