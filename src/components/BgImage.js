import Image from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc };
`;

const FakeBgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -10;

  & > img {
    object-fit: cover !important;
    
 
  }
  
  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
    width: 100vw;
    object-position: 40% 80% !important;
  }
`;

const Content = styled.div`
  position: absolute;
  text-align: center;
  top: 40vh;
  height: 100%;
  width: 100%; 
  z-index: -5;
  `;

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className
}) => (
  <Parent bc={overlayColor}>
    <FakeBgImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </Parent> 
);

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null
};

export default BgImage;



















