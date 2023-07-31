import Article from '@/blog/components/article';
import Blog from '@/blog/content/README.mdx';
import README from '../../README.md';

const Homepage = () => {
  return (
    <Article>
      <Blog />
      <README />
    </Article>
  );
};

export default Homepage;
