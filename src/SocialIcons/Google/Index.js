import React from "react";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(66, 133, 244, 1);
    color: rgba(66, 133, 244, 1);

    &:hover {
      background: rgba(66, 133, 244, 1);
      border-color: rgba(66, 133, 244, 1);
      color: #fff;
    }
  }
`;

const Google = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaGoogle />
      </a>
    </SocialIconStyled>
  );
};

export default Google;
