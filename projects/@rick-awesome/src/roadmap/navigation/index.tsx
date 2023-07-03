import { listItemStyle, ulStyle } from './style';

const Navigation = () => {
  return (
    <div className="flex items-center justify-center">
      <ul css={ulStyle}>
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
    </div>
  );
};

export default Navigation;
