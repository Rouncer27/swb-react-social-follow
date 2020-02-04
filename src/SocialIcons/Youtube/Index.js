import React from "react";
import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(255, 0, 0, 1);
    color: rgba(255, 0, 0, 1);

    &:hover {
      background: rgba(255, 0, 0, 1);
      border-color: rgba(255, 0, 0, 1);
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
