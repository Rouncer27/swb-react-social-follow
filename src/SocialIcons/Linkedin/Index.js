import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { IconBase } from "../../styles";

const SocialIconStyled = styled.div`
  ${IconBase};

  a {
    border-color: #0077b5;
    color: #0077b5;

    &:hover {
      background: #0077b5;
      border-color: #0077b5;
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
