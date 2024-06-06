const url = 'https://api.metart.tube';
const webUrl = 'https://metart.tube/';
const tubeUrl = 'https://video.metart.tube/';

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.metart.tube',
  siteKey: '0x4AAAAAAAcB0Hh4GsCUpHeN',
  secretKey: '0x4AAAAAAAcB0LSjDl-bd2rJo52Fje41XPw',
  qrLink: `${webUrl}settings/edit-profile/`,
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
};
