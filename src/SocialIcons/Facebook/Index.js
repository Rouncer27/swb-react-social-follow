import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(24, 119, 242, 1);
    color: rgba(24, 119, 242, 1);

    &:hover {
      background: rgba(24, 119, 242, 1);
      border-color: rgba(24, 119, 242, 1);
      color: #fff;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Facebook = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaFacebookF />
      </a>
    </SocialIconStyled>
  );
};

export default Facebook;
