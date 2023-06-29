import { GAME_LIST_MOK } from "mok/gameListMok";

export const getValidUrlImg = (key) => {
  return `https://cdn2.softswiss.net/i/s2/${key}.png`;
};

export const validDataGameList = () => {
  return Object.entries(GAME_LIST_MOK).map(
    ([key, { provider, real, title }]) => {
      const currentReal = Object.keys(real);
      return {
        key,
        provider,
        real: currentReal,
        title,
      };
    }
  );
};

export const validUrlParamsKey = (str = "") => {
  return str.replace("/", "-");
};

export const getKeyGameFromLink = (str = "") => {
  return str.replace("-", "/");
};

export function getRoutePath(URL, params) {
  let parsedURL = URL;
  if (params) {
    Object.entries(params).forEach((value) => {
      parsedURL = parsedURL.replace(`:${value[0]}`, value[1]);
    });
  }

  return parsedURL;
}
