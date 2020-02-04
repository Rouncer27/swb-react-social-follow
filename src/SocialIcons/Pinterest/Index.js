import React from "react";
import styled from "styled-components";
import { FaPinterestP } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(189, 8, 28, 1);
    color: rgba(189, 8, 28, 1);

    &:hover {
      background: rgba(189, 8, 28, 1);
      border-color: rgba(189, 8, 28, 1);
      color: #fff;
    }
  }
`;

const Pinterest = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaPinterestP />
      </a>
    </SocialIconStyled>
  );
};

export default Pinterest;
