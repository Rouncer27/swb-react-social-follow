import React from "react";
import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: #ff0000;
    color: #ff0000;

    &:hover {
      background: #ff0000;
      border-color: #ff0000;
      color: #fff;
    }
  }
`;

const Youtube = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaYoutube />
      </a>
    </SocialIconStyled>
  );
};

export default Youtube;
