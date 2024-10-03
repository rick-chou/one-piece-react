import { ContentWrapper } from '@/theme';
import { random } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { listItemStyle, ulStyle } from './style';
import { useTheme } from '@/hooks/useTheme';

const Navigation = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

  return (
    <ContentWrapper>
      <ul
        css={ulStyle}
        onClick={async e => {
          e.preventDefault();
          const { metaData } = await import('@/router/meta-data');
          const paths = Object.values(metaData).flat();
          const randomPath = paths.at(random(0, paths.length));
          navigate(randomPath!.path);
        }}>
        <li>
          <a css={listItemStyle} href="">
            <box-icon type="logo" name="react" color={dark ? '#FFF' : '#000'} />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon type="logo" name="vuejs" color={dark ? '#FFF' : '#000'} />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              name="angular"
              type="logo"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="visual-studio"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="docker"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="tailwind-css"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="github"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="nodejs"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="typescript"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <box-icon
              type="logo"
              name="codepen"
              color={dark ? '#FFF' : '#000'}
            />
          </a>
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default Navigation;
