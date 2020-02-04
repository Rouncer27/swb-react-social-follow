import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: #405de6;
    color: #405de6;

    &:hover {
      background: #405de6;
      border-color: #405de6;
      color: #fff;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Instagram = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaInstagram />
      </a>
    </SocialIconStyled>
  );
};

export default Instagram;
