import React from "react";
import styled from "styled-components";
import * as styles from "../styles";

const Path = styled.path`
  fill: ${({ color }: { color: string }) => color};
`;

interface MintbaseLogoProps {
  width?: number;
  height?: number;
  color?: string;
}

interface ContainerProps {
  width?: number;
  color?: string;
}

const Container = styled.div`
  width: ${({ width }: ContainerProps) => `${width}px`};
  height: ${({ width }: ContainerProps) => `${width}px`};
`;

const defaultProps = {
  width: 120,
  color: styles.OFF_WHITE,
};

const MintbaseLogo = ({ width, color }: MintbaseLogoProps = defaultProps) => {
  const setColor = color ? color : defaultProps.color;
  const setWidth = width ? width : defaultProps.width;

  return (
    <Container width={setWidth}>
      <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 700 700">
        <g>
          <Path
            color={setColor}
            d="M206.31,492.71h-0.02c-22.64,0-41.06,18.42-41.06,41.06c0,22.64,18.42,41.06,41.06,41.06
            c22.64,0,41.06-18.42,41.06-41.06C247.35,511.13,228.94,492.71,206.31,492.71z"
          />
          <Path
            color={setColor}
            d="M308.95,287.42c-22.64,0-41.06,18.42-41.06,41.06c0,22.58,18.47,41.06,41.05,41.06
            c22.64,0,41.06-18.42,41.06-41.06C350,305.89,331.52,287.42,308.95,287.42z"
          />
          <Path
            color={setColor}
            d="M411.59,82.12c-22.64,0-41.06,18.42-41.06,41.06c0,22.64,18.42,41.06,41.06,41.06
            c22.64,0,41.06-18.42,41.06-41.06C452.65,100.54,434.23,82.12,411.59,82.12z"
          />
          <Path
            color={setColor}
            d="M411.59,574.82c22.64,0,41.06-18.42,41.06-41.06c0-22.58-18.48-41.05-41.05-41.05
            c-22.64,0-41.06,18.42-41.06,41.06C370.54,556.35,389.01,574.82,411.59,574.82z"
          />
          <Path
            color={setColor}
            d="M350,0C157.25,0,1,156.25,1,349c0,192.75,156.25,349,349,349c192.75,0,349-156.25,349-349
            C699,156.25,542.75,0,350,0z M514.24,390.06c-34.01,0-61.59-27.57-61.59-61.59v-41.06h-97.82c9.76,10.9,15.7,25.28,15.7,41.06
            c0,34.02-27.58,61.59-61.59,61.59c-16.43,0-30.8-6.16-41.06-15.71v97.82h143.71c34.9,0,61.6,26.69,61.6,61.6
            c0,34.02-27.57,61.59-61.59,61.59c-34.91,0-61.59-26.7-61.59-61.6c0-15.78,5.94-30.79,15.69-41.06h-97.81v41.06
            c0,34.01-27.58,61.59-61.59,61.59s-61.59-27.57-61.59-61.59c0-34.02,27.58-61.59,61.59-61.59h41.06V328.47
            c0-34.01,27.58-61.59,61.59-61.59h143.71v-97.81c-10.9,9.76-25.28,15.7-41.06,15.7c-34.01,0-61.59-27.58-61.59-61.59
            c0-34.01,27.57-61.59,61.59-61.59c34.01,0,61.59,27.57,61.59,61.59v0.04v143.66h41.06c34.02,0,61.59,27.58,61.59,61.59
            C575.82,362.49,548.25,390.06,514.24,390.06z"
          />
          <Path
            color={setColor}
            d="M514.24,287.41c-22.64,0-41.06,18.42-41.06,41.06s18.42,41.06,41.06,41.06c22.64,0,41.06-18.42,41.06-41.06
            S536.88,287.41,514.24,287.41z"
          />
        </g>
      </svg>
    </Container>
  );
};

export default MintbaseLogo;
