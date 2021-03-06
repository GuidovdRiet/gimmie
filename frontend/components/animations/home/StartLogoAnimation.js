import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const LogoParts = ({ ...props }) => {
  const svgDelay = 500;
  const pathDelay = 1000;

  const { scale } = useSpring({
    from: { scale: 0.28 },
    scale: 1,
    config: config.stiff,
    delay: svgDelay
  });

  const { opacity, xyz } = useSpring({
    from: { opacity: 1, xyz: [0, 0, 0] },
    opacity: 0.3,
    xyz: [-60, -150, 0],
    config: config.stiff,
    delay: pathDelay
  });

  const { opacityBottom, xyzBottom } = useSpring({
    from: { opacityBottom: 1, xyzBottom: [0, 0, 0] },
    opacityBottom: 0.3,
    xyzBottom: [60, 150, 0],
    config: { mass: 1, tension: 210, friction: 20 },
    delay: pathDelay
  });

  return (
    <SVG
      {...props}
      viewBox="0 0 644.54 344.07"
      style={{
        transform: scale.interpolate(scale => `scale(${scale})`)
      }}
    >
      <UPPER
        style={{
          transform: xyz.interpolate(
            (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
          ),
          opacity: opacity.interpolate(o => `${o}`)
        }}
      >
        <path d="M28.88 201.06Q8.13 186.52 2 158.12t6.7-50.33q12.85-21.93 37-27.17t41 9.91l-3.52-16.58L122 65.54l27.3 126.09q5.76 26.59-4.95 47.45-5.31 10.66-16.83 18.39t-28.08 11.31q-29.08 6.3-48.67-1.83T23.63 235l38.17-8.26q8.55 13.13 30.36 8.41a24.39 24.39 0 0 0 16.17-11q5.48-8.68 2.14-24.13l-3.84-17.72q-9.75 23-33.38 28.16t-44.37-9.4zm64.63-38.73q6.63-10 3.39-25t-13.4-21.24q-10.15-6.24-21.06-3.89T44.9 124.57q-6.64 10-3.38 25t13.4 21.23A27.74 27.74 0 0 0 76 174.69q10.88-2.37 17.51-12.37z" />
        <path d="M188.44 36.18a23.24 23.24 0 0 1-42.36-7.83 22.58 22.58 0 0 1 3.07-17.67 23.25 23.25 0 0 1 42.37 7.84 22.59 22.59 0 0 1-3.08 17.66zm-4.89 148.75L156.11 58.16 195 49.75l27.4 126.77z" />
        <path d="M267.88 34l4 18.63Q279.62 30 306 24.28a50.48 50.48 0 0 1 26.48.93 44.74 44.74 0 0 1 21.09 14.46A55.46 55.46 0 0 1 368 17.88a49.21 49.21 0 0 1 23.63-12.14q23.17-5 39.9 6.35t22.24 36.8l16 74.06-38.62 8.36-14.9-68.84q-2.66-12.26-10.58-17.57t-19.29-2.84Q375 44.53 370 52.63T367.66 73l14.9 68.84-38.62 8.36L329 81.36q-2.62-12.26-10.55-17.56T299.17 61q-11.37 2.46-16.38 10.57t-2.37 20.37l14.9 68.84-38.85 8.41L229 42.37z" />
      </UPPER>
      <BOTTOM
        style={{
          transform: xyzBottom.interpolate(
            (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
          ),
          opacity: opacityBottom.interpolate(o => `${o}`)
        }}
      >
        <path d="M471.3 304.34a23.85 23.85 0 1 1-3.07 17.66 22.45 22.45 0 0 1 3.07-17.66zm4.89-148.75l27.45 126.77-38.85 8.41L437.35 164z" />
        <path d="M230 208.88l4 18.63q7.7-22.59 34.06-28.3a50.5 50.5 0 0 1 26.48.92 44.8 44.8 0 0 1 21.09 14.46 55.4 55.4 0 0 1 14.42-21.79 49.24 49.24 0 0 1 23.66-12.14q23.17-5 39.9 6.35t22.24 36.8l16 74.06-38.62 8.36-14.9-68.84q-2.66-12.26-10.58-17.57T348.58 217q-11.37 2.46-16.38 10.57t-2.37 20.37l14.9 68.84-38.62 8.36-14.9-68.84q-2.66-12.26-10.59-17.57t-19.28-2.84Q250 238.34 245 246.45t-2.37 20.37l14.9 68.84-38.85 8.41L191.2 217.3z" />
        <path d="M592 264.89q-27.72 6-49.29-8t-28-43.53q-6.39-29.52 7.43-50.84t41.76-27.35q28-6.05 50.09 7.23t28.78 44a79.4 79.4 0 0 1 1.75 12.47L557.3 217.7a22.66 22.66 0 0 0 25.38 14.48q7.38-1.6 10.7-3.86a20.07 20.07 0 0 0 4.7-4.11 40.13 40.13 0 0 0 3.37-5.84l42-9.1a57 57 0 0 1-15.15 35.51Q614.51 260 592 264.89zm-3.11-94.57a25.29 25.29 0 0 0-17.34-2.08 23.48 23.48 0 0 0-14.47 9 24.75 24.75 0 0 0-4.83 16.14l47.48-10.28a21.11 21.11 0 0 0-10.83-12.79z" />
      </BOTTOM>
    </SVG>
  );
};

export default LogoParts;

const SVG = styled(animated.svg)`
  fill: ${({ theme }) => theme.pink};
  width: 100%;
  height: 100vh;
`;

const UPPER = styled(animated.g)``;
const BOTTOM = styled(animated.g)``;
