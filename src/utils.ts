export const getImageUrl = (path: any) => {
  return new URL(`./assets/img/salon/${path}`, import.meta.url).href;
};
