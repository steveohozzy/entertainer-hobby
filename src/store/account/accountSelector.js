import { createSelector } from 'reselect';

const selectAccountReducer = (state) => state.account;

export const selectIsAccountOpen = createSelector(
  [selectAccountReducer],
  (account) => account.isAccountOpen
);

export const selectIsSignedIn = createSelector(
  [selectAccountReducer],
  (account) => account.isSignedIn
);
