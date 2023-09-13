/* eslint-disable @typescript-eslint/ban-ts-comment */
import CmdModal from '@/components/commands';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/theme';
import { Global } from '@emotion/react';
import { useMount } from 'ahooks';
import { App as Appwrapper, ConfigProvider } from 'antd';
import $, { type Cash } from 'cash-dom';
import { ScrollRestoration } from 'react-router-dom';
import './animation.scss';
import { appList } from './app-list';
import { globalStyle } from './style';

type AppProps = {
  apps: Array<() => JSX.Element>;
};

const App: React.FC<AppProps> = ({ apps }) => {
  const { fontFamily } = useTheme();

  useMount(() => {
    // @ts-expect-error
    $.fn.addSwitchAppAnimation = function () {
      return this.each(function () {
        const $this = $(this);
        const $cards = $this.find('.sub-app');
        let $current = $cards.filter('.sub-app--current');
        let $next: Cash;

        $cards.on('click', function () {
          // @ts-expect-error
          if (!$current.is(this)) {
            $cards.removeClass('sub-app--current sub-app--out sub-app--next');
            $current.addClass('sub-app--out');

            // @ts-expect-error
            $current = $(this).addClass('sub-app--current');
            $next = $current.next();
            $next = $next.length ? $next : $cards.first();
            $next.addClass('sub-app--next');
          }
        });

        if (!$current.length) {
          $current = $cards.last();
          $cards.first().trigger('click');
        }
      });
    };

    // @ts-expect-error
    $('.app-wrapper').addSwitchAppAnimation();
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily,
        },
      }}>
      <Global styles={globalStyle} />
      <Theme />
      <CmdModal />
      <ScrollRestoration />
      <Appwrapper>
        <div className="app-wrapper">
          {apps.map((_App, idx) => (
            <div key={idx} className="sub-app">
              <_App />
            </div>
          ))}
        </div>
      </Appwrapper>
    </ConfigProvider>
  );
};

// eslint-disable-next-line react/display-name
export default () => <App apps={appList} />;
