import Blog from '@/blog/layout';
import Repl from '@rickzhou/react-playground/Repl';

const ReplWrapper = () => {
  return (
    <div className="h-[95vh] w-[65vw] p-12">
      <Repl />
    </div>
  );
};

export const appList = [Blog];
