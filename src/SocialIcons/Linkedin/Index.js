import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: rgba(0, 119, 181, 1);
    color: rgba(0, 119, 181, 1);

    &:hover {
      background: rgba(0, 119, 181, 1);
      border-color: rgba(0, 119, 181, 1);
      color: #fff;
    }
  }
`;

const Linkedin = ({ url }) => {
  return (
    <SocialIconStyled>
      <a target="_blank" rel="nooperner noreferrer" href={url}>
        <FaLinkedinIn />
      </a>
    </SocialIconStyled>
  );
};

export default Linkedin;
