import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: #1da1f2;
    color: #1da1f2;

    &:hover {
      background: #1da1f2;
      border-color: #1da1f2;
      color: #fff;
    }
  }
`;

const Twitter = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaTwitter />
      </a>
    </SocialIconStyled>
  );
};

export default Twitter;
