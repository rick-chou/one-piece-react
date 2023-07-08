import { ContentWrapper } from '@/theme';
import { random } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { listItemStyle, ulStyle } from './style';

const Navigation = () => {
  const navigate = useNavigate();

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
            <i className="icon-reorder"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-th-large"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-bar-chart"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-tasks"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-bell"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-archive"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-comment"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-sitemap"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-thumbs-up"></i>
          </a>
        </li>
        <li>
          <a css={listItemStyle} href="">
            <i className="icon-tumblr"></i>
          </a>
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default Navigation;
