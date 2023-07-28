export const isPwaMode = () => {
  return new URLSearchParams(document.location.search).get('mode') === 'pwa';
};
