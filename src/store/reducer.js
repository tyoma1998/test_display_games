import { createReducer } from "@reduxjs/toolkit";
import { CARD_DISPLAY, SELECT_VALUE_ALL_DISPLAY } from "constant/games";
import { validDataGameList } from "helpers/functions";

import * as actions from "./actions";

export const initialState = {
  data: validDataGameList(),
  providerList: [],
  currencyList: [],
  sortIds: validDataGameList(),
  cardDisplay: CARD_DISPLAY,
  provider: SELECT_VALUE_ALL_DISPLAY,
  currency: SELECT_VALUE_ALL_DISPLAY,
  gameDetails: null,
  isRedirectHome: false,
};

export const gamesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getProviderList, (state) => {
      const providerList = state.data.map(({ provider }) => provider);

      const uniqueList = [...new Set(providerList)];

      return {
        ...state,
        providerList: uniqueList,
      };
    })
    .addCase(actions.getCurrencyList, (state) => {
      const currencyListArray = state.data.map(({ real }) => real);

      const currencyListArrayFlat = currencyListArray.flat();
      const uniqueList = [...new Set(currencyListArrayFlat)];

      return {
        ...state,
        currencyList: uniqueList,
      };
    })
    .addCase(actions.showMore, (state) => {
      return {
        ...state,
        cardDisplay: state.cardDisplay + CARD_DISPLAY,
      };
    })
    .addCase(actions.changeSort, (state, { payload }) => {
      const { provider, currency } = payload || {};
      const currentProvider = !provider ? state.provider : provider;
      const currentCurrency = !currency ? state.currency : currency;

      let currentData;
      if (
        currentProvider === SELECT_VALUE_ALL_DISPLAY &&
        currentCurrency === SELECT_VALUE_ALL_DISPLAY
      ) {
        currentData = state.data;
      } else {
        currentData = state.data.filter((item) => {
          const checkProvider =
            currentProvider !== SELECT_VALUE_ALL_DISPLAY
              ? item.provider === currentProvider
              : true;
          const checkCurrency =
            currentCurrency !== SELECT_VALUE_ALL_DISPLAY
              ? item.real.includes(currentCurrency)
              : true;

          return checkProvider && checkCurrency;
        });
      }

      return {
        ...state,
        sortIds: currentData,
        provider: currentProvider,
        currency: currentCurrency,
        cardDisplay: CARD_DISPLAY,
      };
    })
    .addCase(actions.changeGameDetails, (state, { payload }) => {
      return {
        ...state,
        gameDetails: payload,
      };
    })
    .addCase(actions.findGameDetails, (state, { payload }) => {
      const findGame = state.data.find((item) => item.key === payload);

      return {
        ...state,
        gameDetails: findGame || {},
        isRedirectHome: !findGame,
      };
    })
    .addCase(actions.changeIsRedirectHome, (state, { payload }) => {
      return {
        ...state,
        isRedirectHome: payload || false,
      };
    });
});
