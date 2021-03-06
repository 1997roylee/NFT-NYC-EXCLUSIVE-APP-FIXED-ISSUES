import { getNFTCount, isBroadcasted } from './helpers';
import { atomFamilyWithQuery, atomWithQuery, useQueryAtom } from 'jotai-query-toolkit';
import { atom, useAtom } from 'jotai';
import { userDataAtom } from 'micro-stacks/react';
import { MAX_TOKEN_AMOUNT } from './constants';

export const nftCountState = atomWithQuery('getNFTCount', getNFTCount);
export const nftCountQuery = ['getNFTCount', getNFTCount];

export const nftClaimedFamilyState = atomFamilyWithQuery('nftClaimed', (_get, user) => {
  return isBroadcasted(user);
});

export const nftClaimedExternalState = atom(get => {
  const user = get(userDataAtom);
  if (!user) return false;
  return get(nftClaimedFamilyState(user));
});

export const claimTxState = atom('');

export const nftClaimedManualState = atom(false);

export const nftClaimedState = atom(
  get => {
    const external = get(nftClaimedExternalState);
    const manual = get(nftClaimedManualState);
    return !!(external || manual);
  },
  (_get, set, update) => {
    set(nftClaimedManualState, update);
  }
);

export const nftCountEnabledState = atom(get => {
  const count = get(nftCountState);
  return count < MAX_TOKEN_AMOUNT;
});

export const useNftCountEnabled = () => useAtom(nftCountEnabledState);
export const useNftClaimed = () => useAtom(nftClaimedState);
export const useNftCount = () => useQueryAtom(nftCountState);
