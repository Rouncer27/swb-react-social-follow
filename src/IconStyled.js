import React from "react";
import styled from "styled-components";

const IconBase = styled.div`
  align-self: center;
  position: relative;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  margin-left: 10px;

  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 7px;
    transition: all 0.3s ease;
    border-style: solid;
    border-width: 2px;
    border-radius: ${props => (props.iconType === "square" ? "0%" : "50%")};
    font-size: 18px;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const IconStyled = ({ iconType, children }) => {
  return <IconBase iconType={iconType}>{children}</IconBase>;
};

export default IconStyled;
