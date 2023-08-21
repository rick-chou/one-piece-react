import { useWelcomeStyle } from '@/styles';

const Welcome = () => {
  const style = useWelcomeStyle();

  return (
    <div css={style}>
      <div>
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/js.webp" />
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/react.webp" />
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/vscode.webp" />
      </div>
      <div>@RickZhou/Editor</div>
    </div>
  );
};

export default Welcome;
