import { routes } from '@//router';
import { useEffect, useRef } from 'react';
import { matchRoutes, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { animationDelay, mainContainerStyle } from '../style';

const Content = () => {
  const location = useLocation();
  const currentRoute = matchRoutes(routes, location)?.at(-1)?.route;
  const ref = useRef<HTMLDivElement>(null);
  const currentOutlet = useOutlet(currentRoute?.path);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div css={mainContainerStyle} ref={ref}>
      <SwitchTransition>
        <CSSTransition key={location.pathname} timeout={300} unmountOnExit>
          {() => <div css={animationDelay}>{currentOutlet}</div>}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Content;
