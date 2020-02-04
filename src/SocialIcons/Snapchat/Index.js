import React from "react";
import styled from "styled-components";
import { FaSnapchatGhost } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(255, 252, 0, 1);
    color: rgba(255, 252, 0, 1);

    &:hover {
      background: rgba(255, 252, 0, 1);
      border-color: rgba(255, 252, 0, 1);
      color: #fff;
    }
  }
`;

const Snapchat = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaSnapchatGhost />
      </a>
    </SocialIconStyled>
  );
};

export default Snapchat;
