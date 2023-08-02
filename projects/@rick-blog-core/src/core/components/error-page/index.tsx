import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error('error.message', error.stack);
  return (
    <div className="h-screen flex justify-center items-center bg-white py-6 sm:py-8 lg:py-12">
      <div className="px-4 md:px-8">
        <a
          href={import.meta.env.RICK_ISSUE}
          target="_blank"
          className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          rel="noreferrer">
          New issue
        </a>
      </div>

      <div className="prose prose-xl max-w-none prose-slate">
        <pre>
          <code>{error.stack}</code>
        </pre>
      </div>
    </div>
  );
};

export default ErrorPage;
