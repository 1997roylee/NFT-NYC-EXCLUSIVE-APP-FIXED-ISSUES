import { StacksMainnet, StacksMocknet, StacksTestnet } from 'micro-stacks/network';
import { hexToCV } from 'micro-stacks/clarity';
import { Configuration, AccountsApi, SmartContractsApi } from '@stacks/blockchain-api-client';

import {
  // MOCKNET_API_URL,
  MAINNET_API_URL,
  CONTRACT_ID,
  CONTRACT_LAST_ID_METHOD,
  // MOCKNET_CONTRACT_PRINCIPAL,
  MAINNET_CONTRACT_PRINCIPAL,
  TESTNET_API_URL,
  TESTNET_CONTRACT_PRINCIPAL,
} from './constants';


console.log(process.env.NODE_ENV);

export function getUserAddress(user) {
  console.log(user.addresses)
  return process.env.NODE_ENV === 'development' ? user.addresses.testnet : user.addresses.mainnet;
}

export function getNetworkPrincipal() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return TESTNET_CONTRACT_PRINCIPAL;
    default:
      return MAINNET_CONTRACT_PRINCIPAL;
  }
}

export function getNetworkUrl() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return TESTNET_API_URL;
    default:
      return MAINNET_API_URL;
  }
}

export async function isBroadcasted(user, errorCallback) {
  try {
    const assets = await fetchAccountAssets(getUserAddress(user));
    return ownsSpecialNFT(assets);
  } catch (e) {
    typeof errorCallback !== 'undefined' && errorCallback(e);
  }
}

export function getNetwork() {
  return process.env.NODE_ENV === 'development' ? new StacksTestnet() : new StacksMainnet();
}

export async function fetchAccountAssets(principal) {
  const fetch = window.fetch.bind(window);

  const apiConfig = new Configuration({
    fetchApi: fetch,
    basePath: getNetworkUrl(),
  });

  // initiate the /accounts API with the basepath and fetch library
  const accountsApi = new AccountsApi(apiConfig);

  // get transactions for a specific account
  return await accountsApi.getAccountAssets({
    principal,
  });
}

export function ownsSpecialNFT(assets) {
  // check if `nft-nyc-exclusive` is available
  const specialTokenCount = assets.results
    .filter(asset => asset.event_type === 'non_fungible_token_asset')
    .reduce((acc, nft) => {
      if (nft.asset.asset_id === `${getNetworkPrincipal()}.${CONTRACT_ID}::${CONTRACT_ID}`) {
        return acc + 1;
      }

      return acc;
    }, 0);

  return specialTokenCount > 0;
}

export async function callReadOnlyLastId() {
  const fetch = window.fetch.bind(window);

  const apiConfig = new Configuration({
    fetchApi: fetch,
    basePath: getNetworkUrl(),
  });

  // initiate the Smart Contracts API with the basepath and fetch library
  const smartContractsApi = new SmartContractsApi(apiConfig);

  // get transactions for a specific account
  return await smartContractsApi.callReadOnlyFunction({
    contractAddress: getNetworkPrincipal(),
    contractName: CONTRACT_ID,
    functionName: CONTRACT_LAST_ID_METHOD,
    readOnlyFunctionArgs: {
      sender: getNetworkPrincipal(),
      arguments: [],
    },
  });
}

export async function getNFTCount(errorCallback) {
  let count = 0;

  try {
    const resp = await callReadOnlyLastId();

    if (resp.okay && resp.result) {
      count = parseInt(hexToCV(resp.result).value.value.toString());
    }
  } catch (e) {
    errorCallback(e);
  }

  return count;
}
