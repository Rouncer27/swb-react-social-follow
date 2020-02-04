import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(29, 161, 242, 1);
    color: rgba(29, 161, 242, 1);

    &:hover {
      background: rgba(29, 161, 242, 1);
      border-color: rgba(29, 161, 242, 1);
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
