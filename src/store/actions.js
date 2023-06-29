import { createAction } from "@reduxjs/toolkit";

const ACTION_PREFIX = "games/";

export const getProviderList = createAction(`${ACTION_PREFIX}getProviderList`);

export const getCurrencyList = createAction(`${ACTION_PREFIX}getCurrencyList`);

export const showMore = createAction(`${ACTION_PREFIX}showMore`);

export const changeSort = createAction(`${ACTION_PREFIX}changeSort`);

export const changeGameDetails = createAction(
  `${ACTION_PREFIX}changeGameDetails`
);

export const findGameDetails = createAction(`${ACTION_PREFIX}findGameDetails`);

export const changeIsRedirectHome = createAction(
  `${ACTION_PREFIX}changeIsRedirectHome`
);
