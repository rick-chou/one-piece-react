import { css } from '@emotion/react';
import { key } from './const';

const style = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  div {
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    img {
      height: 15vw;
      width: 15vw;
    }
  }
`;

const RickPlayGround = () => {
  return (
    <div css={style}>
      <div>
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/js.webp" />
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/react.webp" />
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/vscode.webp" />
      </div>
      <div>{key}</div>
    </div>
  );
};

export default RickPlayGround;
