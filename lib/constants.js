export const MOCKNET_API_URL = 'http://localhost:3999';
export const TESTNET_API_URL = 'https://stacks-node-api.testnet.stacks.co';
export const MAINNET_API_URL = 'https://stacks-node-api.mainnet.stacks.co';

export const MOCKNET_CONTRACT_PRINCIPAL = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
export const TESTNET_CONTRACT_PRINCIPAL = 'ST1PPBGRK79CEPZBFQS198X3XZCSVVCV910HE3EMT';
export const MAINNET_CONTRACT_PRINCIPAL = 'SP3M7N9Q9HDRM7RVP1Q26P0EE69358PZZAX4MD19Q';
export const CONTRACT_ID = 'nft-nyc-exclusive';
export const CONTRACT_CLAIM_METHOD = 'mint';
export const CONTRACT_LAST_ID_METHOD = 'get-last-token-id';

export const MAX_TOKEN_AMOUNT = 1000;

export const APP_NAME = 'Claim Hiro’s Special Edition Bitcoin NFT';
export const APP_LOGO = 'nftapp-icon.png';
export const APP_WIDTH = '480px';

export const AUTH_BUTTON_TEXT = 'Connect Hiro Wallet for web';
export const CLAIM_SUCCESS_LABEL = 'Congrats! Your NFT claim was submitted';
export const CLAIM_SUCCES_ICON_TEXT = 'Claim submitted';

export const CLAIM_COMPLETE_TITLE = 'All NFTs have been claimed';
export const CLAIM_COMPLETE_TEXT =
  'Don’t miss what’s next. Follow us and stay up to date with the latest Stacks development and ecosystem news.';
export const CLAIM_DEVELOPER_CTA = 'Are you a developer?';
export const CLAIM_DEVELOPER_LINK_TEXT = 'Build an app like this one';
export const CLAIM_DEVELOPER_LINK_URL = 'https://docs.hiro.so/tutorials/clarity-nft';
export const DISCORD_URL = 'https://discord.gg/vjtNeYPcCK';
export const HIRO_SOCIAL_URLS = [
  'https://twitter.com/hirosystems',
  DISCORD_URL,
  'https://hiro.so/weekly-updates',
];

export const MOBILE_ERROR_TITLE = 'Claim not supported on mobile';
export const MOBILE_ERROR_MESSAGE =
  "Unfortunately, this NFT can't be claimed from a mobile device. Please redeem from a desktop browser (Chrome, Brave, or Firefox).";

export const FAQ_TITLES = [
  'Why do I need a wallet?',
  'Why do I need STX tokens?',
  'How do I mint the NFT?',
  'How do I view my NFT?',
];
export const FAQ_ANSWERS = [
  'In order to receive an NFT on Stacks, you must have a Stacks wallet. We recommend the Hiro Wallet for web (Chrome, Brave or Firefox).',
  'You will need to pay a small gas fee to receive your NFT (< 1 STX). The gas token of the Stacks blockchain is the STX token. Learn more about how to obtain STX at StacksToken.com.',
  "Click the 'Claim' button to receive your NFT! Review the transaction in your wallet and click Accept to mint your token.",
  'You can view your NFT at STXNFT.com. Enter your Stacks address and the site will display all NFTs owned by the account.',
];

export const SUCCESS_TITLE = [
  'View your NFT',
  'View transaction',
  'Build an app like this one',
  'Join the community',
];
export const SUCCESS_DESCRIPTION = [
  'Display all your NFTs on STXNFT. Your new NFT will show up 10 minutes after minting.',
  'Display the NFT claim transaction on the Stacks explorer.',
  'Build an NFT app on Stacks, secured by Bitcoin, in only 6 steps.',
  'Learn more about the NFT Stacks community and builders.',
];
export const SUCCESS_URL_TITLE = ['STXNFT', 'Explorer', 'Start building', 'Discord'];
export const SUCCESS_URL_HREF = [
  'https://stxnft.com/',
  'https://explorer.stacks.co/txid/',
  'https://docs.hiro.so/tutorials/clarity-nft',
  DISCORD_URL,
];

export const DISCONNECT_BUTTON_TEXT = 'Disconnect wallet';
