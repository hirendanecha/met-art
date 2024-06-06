const url = 'https://api.metart.tube';
const webUrl = 'https://metart.tube/';
const tubeUrl = 'https://tube.metart.tube/';

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
  siteKey: '0x4AAAAAAAZb06HM1GQ8pBPT',
  secretKey: '0x4AAAAAAAZb04aDUIBALahr1N5XCD_bcTQ',
  qrLink: `${webUrl}settings/edit-profile/`,
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
};
