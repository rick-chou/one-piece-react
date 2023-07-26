import Blog from '@/blog/README.mdx';
import Article from '@/components/article';
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
