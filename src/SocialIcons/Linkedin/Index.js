import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import IconStyled from "../../IconStyled";

const SocialIconStyled = styled.a`
  border-color: rgba(0, 119, 181, 1);
  color: rgba(0, 119, 181, 1);

  &:hover {
    background: rgba(0, 119, 181, 1);
    border-color: rgba(0, 119, 181, 1);
    color: #fff;
  }
`;

const Linkedin = ({ url, iconType }) => {
  return (
    <IconStyled iconType={iconType}>
      <SocialIconStyled target="_blank" rel="nooperner noreferrer" href={url}>
        <FaLinkedinIn />
      </SocialIconStyled>
    </IconStyled>
  );
};

export default Linkedin;
