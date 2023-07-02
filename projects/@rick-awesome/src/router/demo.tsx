import { animationDelay } from '@/home.style';
import { first, pick, upperFirst } from 'lodash';
import { useOutletContext, type RouteObject } from 'react-router-dom';
import { metaData } from './meta-data';

export const DemoRoutes: RouteObject = first(
  Object.entries(pick(metaData, 'demo')).map(([key, value]) => {
    return {
      path: key,
      children: value.map(i => {
        return {
          path: i.name,
          async lazy() {
            return {
              Component() {
                const path: string = useOutletContext();
                return (
                  <div>
                    <div className="main-header" css={animationDelay(0)}>
                      {upperFirst(path)}
                    </div>
                    <div css={animationDelay(0.1)}>
                      <i.component.default />
                    </div>
                  </div>
                );
              },
            };
          },
        };
      }),
    };
  }),
)!;
