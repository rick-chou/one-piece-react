import { materials } from '@/components/materials';
import { MDXProvider } from '@mdx-js/react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Home from './home';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Home />,
    children: materials.map(material => {
      return {
        path: material,
        async lazy() {
          const { default: Docs } = await import(
            `../components/${material}/demo/index.mdx`
          );
          return {
            Component: () => (
              <div className="prose prose-slate max-w-none">
                <MDXProvider
                  components={{
                    pre(props: any) {
                      return (
                        <div className="not-prose">
                          <pre {...props} className="!bg-transparent"></pre>
                        </div>
                      );
                    },
                  }}>
                  <Docs />
                </MDXProvider>
              </div>
            ),
          };
        },
      };
    }),
  },
];

export const router = createBrowserRouter(routes);
