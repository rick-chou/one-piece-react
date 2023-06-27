import { css } from '@emotion/react';

const keyframesBottom = css`
  @keyframes bottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

export const animate = css`
  animation: bottom 0.8s var(--delay) both;
`;

export const animationDelay = (delay: number) =>
  css({
    '--delay': `${delay}s`,
  });

export const globalStyle = css`
  ${keyframesBottom}

  :root {
    --body-font: 'Inter', sans-serif;
    --theme-bg: #1f1d2b;
    --body-color: #808191;
    --button-bg: #353340;
    --border-color: rgb(128 129 145 / 24%);
    --video-bg: #252936;
    --delay: 0s;
  }

  body {
    font-family: var(--body-font);
    color: var(--body-color);
    background-image: url('https://images.unsplash.com/photo-1445251836269-d158eaa028a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80');
    background-image: url(https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color-dodge;
    background-color: rgba(18, 21, 39, 0.86);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em 2em;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        163deg,
        rgba(31, 29, 43, 1) 21%,
        rgba(31, 29, 43, 0.3113620448179272) 64%
      );
      opacity: 0.4;
      content: '';
    }
  }
`;

export const containerStyle = css`
  background-color: var(--theme-bg);
  max-width: 1240px;
  max-height: 900px;
  height: 95vh;
  display: flex;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const sidebarStyle = css`
  width: 220px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;

  &-link {
    &:hover,
    &.is-active {
      color: #fff;
      font-weight: 600;
      &:nth-child(2n + 1) {
        svg {
          background: #ff7551;
        }
      }
      &:nth-child(2n) {
        svg {
          background: #32a7e2;
        }
      }
      &:nth-child(2n + 3) {
        svg {
          background: #6c5ecf;
        }
      }
    }
  }
  &.collapse {
    width: 90px;
    border-right: 1px solid var(--border-color);
    .logo-expand,
    .side-title {
      display: none;
    }
    .logo {
      display: flex;
    }
    .side-wrapper {
      width: 30px;
    }
    .side-menu svg {
      margin-right: 30px;
    }
  }
`;

export const logoStyle = css`
  text-decoration: none;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  line-height: 34px;
  position: sticky;
  top: 0;
  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    background: var(--theme-bg);
    width: 200px;
    height: 70px;
    z-index: -1;
  }
`;

export const sideMenuStyle = css`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--body-color);
    & + a {
      margin-top: 26px;
    }
  }
  svg {
    width: 30px;
    padding: 8px;
    border-radius: 10px;
    background-color: var(--button-bg);
    flex-shrink: 0;
    margin-right: 16px;
    &:hover {
      color: #fff;
    }
  }
`;

export const sideTitleStyle = css`
  font-size: 12px;
  letter-spacing: 0.07em;
  margin-bottom: 24px;
`;

export const sideWrapperStyle = css`
  border-bottom: 1px solid var(--border-color);
  padding: 36px 0;
  width: 145px;
  & + & {
    border-bottom: none;
  }
`;

export const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const headerStyle = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 30px;
`;

export const searchBarStyle = css`
  height: 34px;
  display: flex;
  width: 100%;
  max-width: 450px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--button-bg);
    border-radius: 8px;
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 500;
    padding: 0 40px 0 16px;
    box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 96%;
    color: #fff;
  }
`;

export const userStyle = css`
  &-settings {
    display: flex;
    align-items: center;
    padding-left: 20px;
    flex-shrink: 0;
    margin-left: auto;
    svg {
      width: 10px;
      flex-shrink: 0;
      @media screen and (max-width: 575px) {
        display: none;
      }
    }
    .notify {
      position: relative;
      svg {
        width: 20px;
        margin-left: 24px;
        flex-shrink: 0;
      }
      .notification {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ec5252;
        position: absolute;
        right: 1px;
        border: 1px solid var(--theme-bg);
        top: -2px;
        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }
  &-img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;
  }
  &-name {
    color: #fff;
    font-size: 14px;
    margin: 0 6px 0 12px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
`;

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  flex-grow: 1;
  overflow: auto;
`;

export const mainHeader = css`
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    #1f1d2b 0%,
    #1f1d2b 78%,
    rgb(31 29 43 / 0%) 100%
  );
  z-index: 11;
`;

export const smallHeader = css`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin: 30px 0 20px;
`;

export const mainStyle = css`
  &-blogs {
    display: flex;
    align-items: center;
  }
  &-blog__author {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    &.tips {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
  &-blog__title {
    font-size: 25px;
    max-width: 12ch;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 30px;
  }
  &-blog {
    background-image: url('https://assets.codepen.io/3364143/skate-removebg-preview.png');
    background-size: 80%;
    background-position-x: 150px;
    background-color: #31abbd;
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 30px;
    border-radius: 20px;
    align-self: stretch;
    overflow: hidden;
    position: relative;
    transition: background 0.3s;
    background-repeat: no-repeat;
    & + & {
      margin-left: 20px;
      width: 35%;
      background-image: url(https://c0.anyrgb.com/images/1020/945/venice-beach-2018-outdoors-sport-men-jumping-desert-sunset-extreme-sports-one-person-action.jpg);
      background-color: unset;
      background-position-x: 0;
      background-size: 139%;
      filter: saturate(1.4);
      .author-img {
        border-color: rgb(255 255 255 / 75%);
        margin-top: 14px;
      }
      .author-img__wrapper svg {
        border-color: #ffe6b2;
        color: #e7bb7d;
      }
      .author-detail {
        margin-left: 0;
      }
    }
    @media screen and (max-width: 905px) {
      &,
      & + .main-blog {
        width: 50%;
        padding: 30px;
      }
      & {
        background-size: cover;
        background-position-x: center;
        background-blend-mode: overlay;
      }
    }
    &__time {
      background: rgba(21, 13, 13, 0.44);
      color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
`;

export const authorStyle = css`
  &-img {
    width: 52px;
    height: 52px;
    border: 1px solid rgb(255 255 255 / 75%);
    padding: 4px;
    border-radius: 50%;
    object-fit: cover;
    &__wrapper {
      position: relative;
      flex-shrink: 0;
      svg {
        width: 16px;
        padding: 2px;
        background-color: #fff;
        color: #0daabc;
        border-radius: 50%;
        border: 2px solid #0daabc;
        position: absolute;
        bottom: 5px;
        right: 0;
      }
    }
  }
  &-name {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 8px;
  }
  &-info {
    font-size: 13px;
    font-weight: 400;
    color: #fff;
  }
  &-detail {
    margin-left: 16px;
  }
`;

export const seperateStyle = css`
  width: 3px;
  height: 3px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 6px;
  &.video-seperate {
    background-color: var(--body-color);
  }
`;

export const videosStyle = css`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const videoStyle = css`
  position: relative;
  background-color: var(--video-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s;
  &-wrapper {
    position: relative;
  }
  &-name {
    color: #fff;
    font-size: 16px;
    line-height: 1.4em;
    padding: 12px 20px 0;
    overflow: hidden;
    background-color: var(--video-bg);
    z-index: 9;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &-view {
    font-size: 12px;
    padding: 12px 20px 20px;
    background-color: var(--video-bg);
    position: relative;
  }
  &-by {
    transition: 0.3s;
    padding: 20px 20px 0px;
    display: inline-flex;
    position: relative;
    &:before {
      content: '';
      background-color: #22b07d;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      top: 26px;
      right: 5px;
    }
    &.offline:before {
      background-color: #ff7551;
    }
  }
  &-time {
    position: absolute;
    background: rgba(21, 13, 13, 0.44);
    color: rgb(255 255 255 / 85%);
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 6px;
    top: 10px;
    z-index: 1;
    right: 8px;
  }
  &:hover {
    video {
      transform: scale(1.6);
      transform-origin: center;
    }
    .video-time {
      display: none;
    }
    .video-author {
      bottom: -65px;
      transform: scale(0.6);
      right: -3px;
      z-index: 10;
    }
    .video-by {
      opacity: 0;
    }
  }
  &-author {
    position: absolute;
    right: 10px;
    transition: 0.4s;
    bottom: -25px;
    svg {
      background-color: #0aa0f7;
      color: #fff;
      border-color: var(--video-bg);
    }
  }
`;

export const streamAreaStyle = css`
  display: none;
  @media screen and (max-width: 940px) {
    flex-direction: column;
    .video-stream {
      width: 100%;
    }
    .chat-stream {
      margin-left: 0;
      margin-top: 30px;
    }
    .video-js.vjs-fluid {
      min-height: 250px;
    }
    .msg__content {
      max-width: 100%;
    }
  }
`;

export const showStyle = css`
  .stream-area {
    display: flex;
  }
  .main-header,
  .main-blogs,
  .small-header,
  .videos {
    display: none;
  }
`;

export const videoStreamStyle = css`
  width: 65%;
  object-fit: cover;
  transition: 0.3s;
  &:hover .video-js .vjs-big-play-button {
    opacity: 1;
  }
`;

export const videoPStyle = css`
  margin-right: 12px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 50%;
  position: relative;
  top: 0;
  left: 0;
  .author-img {
    border: 0;
  }
  &-wrapper {
    display: flex;
    align-items: center;
    .author-img {
      border: 0;
    }
    svg {
      width: 20px;
      padding: 4px;
    }
    @media screen and (max-width: 650px) {
      flex-direction: column;
      .button-wrapper {
        margin: 20px auto 0;
      }
      .video-p-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .video-p {
        margin-right: 0;
      }
    }
  }
  &-sub {
    font-size: 12px;
  }
  &-title {
    font-size: 24px;
    color: #fff;
    line-height: 1.4em;
    margin: 16px 0 20px;
  }
  &-subtitle {
    font-size: 14px;
    line-height: 1.5em;
    max-width: 60ch;
    & + & {
      margin-top: 16px;
    }
  }
  &-name {
    margin-bottom: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    &:after {
      content: '';
      width: 6px;
      height: 6px;
      background-color: #22b07d;
      border-radius: 50%;
      margin-left: 8px;
      display: inline-block;
    }
    &.offline:after {
      background-color: #ff7551;
    }
  }
`;

export const videoContentStyle = css`
  width: 100%;
`;

export const buttonWrapperStyle = css`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const likeStyle = css`
  display: flex;
  align-items: center;
  background-color: var(--button-bg);
  color: #fff;
  border: 0;
  font-family: var(--body-font);
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  &.red {
    background-color: #ea5f5f;
  }
  svg {
    width: 18px;
    flex-shrink: 0;
    margin-right: 10px;
    padding: 0;
  }
  & + & {
    margin-left: 16px;
  }
`;

export const videoStats = css`
  margin-left: 30px;
`;

export const videoDetailStyle = css`
  display: flex;
  margin-top: 30px;
  width: 100%;
`;

export const chatHeaderStyle = css`
  display: flex;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  position: sticky;
  top: 0;
  background-color: #252836;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid var(--border-color);
  svg {
    width: 15px;
    margin-right: 6px;
    flex-shrink: 0;
  }
  span {
    margin-left: auto;
    color: var(--body-color);
    font-size: 12px;
    display: flex;
    align-items: center;
  }
`;

export const chatStreamStyle = css`
  flex-grow: 1;
  margin-left: 30px;
`;

export const chatStyle = css`
  background-color: #252836;
  border-radius: 20px;
  padding: 0 20px;
  max-height: 414px;
  overflow: auto;
  &-footer {
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0;
    left: 0;
    width: calc(100% + 20px);
    padding-bottom: 12px;
    background-color: #252836;
    input {
      width: 100%;
      border: 0;
      background-color: #2d303e;
      border-radius: 20px;
      font-size: 12px;
      color: #fff;
      margin-left: -10px;
      padding: 12px 40px;
      font-weight: 500;
      font-family: var(--body-font);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.47 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12zm5.52 1.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.19.54 1.19 1.2 0 .66-.53 1.2-1.19 1.2zM10.8 12c0 .66.54 1.2 1.2 1.2.66 0 1.19-.54 1.19-1.2a1.194 1.194 0 10-2.39 0zm4.48 0a1.195 1.195 0 102.39 0 1.194 1.194 0 10-2.39 0z' fill='%236c6e78'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: 8px;
      &::placeholder {
        color: #6c6e78;
      }
    }
    &:before {
      content: '';
      position: absolute;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-size: 14px;
      background-position: center;
      width: 18px;
      height: 18px;
      background-color: #6c5ecf;
      padding: 4px;
      border-radius: 50%;
      right: 16px;
    }
  }
  &-vid {
    &__title {
      color: #fff;
      font-size: 18px;
    }
    &__container {
      margin-top: 40px;
    }
    &__wrapper {
      display: flex;
      align-items: center;
      margin-top: 26px;
    }
    &__name {
      color: #fff;
      font-size: 14px;
      line-height: 1.3em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
    &__img {
      width: 100px;
      height: 80px;
      border-radius: 10px;
      object-fit: cover;
      object-position: right;
      margin-right: 16px;
      transition: 0.3s;
      &:hover {
        transform: scale(1.02);
      }
    }
    &__content {
      max-width: 20ch;
    }
    &__by,
    &__info {
      color: var(--body-color);
      font-size: 13px;
    }
    &__by {
      margin: 6px 0;
    }
    &__button {
      background-color: #6c5ecf;
      border: 0;
      color: #fff;
      font-size: 13px;
      margin-top: 26px;
      display: flex;
      padding: 0 10px;
      align-items: center;
      justify-content: center;
      height: 40px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: #5847d0;
      }
    }
  }
`;

export const messageStyle = css`
  display: flex;
  align-items: center;
  margin-top: 18px;
  &:last-child {
    margin-bottom: 18px;
  }
  &-container .author-img__wrapper svg {
    width: 15px;
  }
`;

export const msgStyle = css`
  &__name {
    font-size: 13px;
  }
  &__content {
    line-height: 1.4em;
    max-width: 26ch;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
