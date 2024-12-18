import { memoSVC } from '@root/packages/@rick-utils';
import { type PropsWithChildren, useEffect, useRef } from 'react';
import { useLocation, useNavigation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { animationDelay, mainContainerStyle } from '../style';

export const Content = memoSVC<PropsWithChildren>(({ children }) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'idle') {
      setTimeout(() => {
        ref.current?.scrollTo(0, 0);
      }, 300);
    }
  }, [navigation.state]);

  return (
    <div css={mainContainerStyle} ref={ref}>
      <SwitchTransition>
        <CSSTransition key={location.pathname} timeout={300} mountOnEnter unmountOnExit in>
          {() => <div css={animationDelay}>{children}</div>}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
});
