import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(195, 42, 163, 1);
    color: rgba(195, 42, 163, 1);

    &:hover {
      background: rgba(195, 42, 163, 1);
      border-color: rgba(195, 42, 163, 1);
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
