import { keyframes } from '@emotion/react';

const clickOff = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`;

const clickOn = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`;

const shakeOff = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(0.75, 1.25, 1);
  }

  40% {
    transform: scale3d(1.25, 0.75, 1);
  }

  50% {
    transform: scale3d(0.85, 1.15, 1);
  }

  65% {
    transform: scale3d(1.05, 0.95, 1);
  }

  75% {
    transform: scale3d(0.95, 1.05, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const shakeOn = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const rotateOff = keyframes`
  50% {
    transform: rotate(180deg);
  }
`;

const rotateOn = keyframes`
  50% {
    transform: rotate(-180deg);
  }
`;

const animationClickOff = keyframes`
  0% {
    right: auto;
    left: 9%;
  }

  50% {
    width: 13vw;
  }

  100% {
    left: auto;
    right: 9%;
  }
`;

const animationClickOn = keyframes`
  0% {
    left: auto;
    right: 9%;
  }

  50% {
    width: 13vw;
  }

  100% {
    right: auto;
    left: 9%;
  }
`;
