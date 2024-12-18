import { isPwaMode } from '@rickzhou/react-flow/utils/isPwaMode';
import type { NavigateOptions } from 'react-router-dom';
import { useNavigate as _useNavigate } from 'react-router-dom';

export const useNavigate = () => {
  const _navigate = _useNavigate();
  const navigate = (to: string, options?: NavigateOptions) => {
    const urlPattern = to.split('?');
    const search = new URLSearchParams(urlPattern.length > 1 ? urlPattern.at(-1) : '');
    if (isPwaMode()) {
      search.append('mode', 'pwa');
    }

    const path = to.split('?')?.at(0) ?? to;
    const url = search.toString() ? `${path}?${search.toString()}` : path;
    _navigate(url, options);
  };

  return navigate;
};
