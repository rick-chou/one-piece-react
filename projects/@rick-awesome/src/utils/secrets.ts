/* eslint-disable @typescript-eslint/naming-convention */
import CryptoJS from 'crypto-js';
import { loadEnv } from 'vite';

const { RICK_GITHUB_TOKEN, RICK_PUBLIC_KEY } = loadEnv(
  'production',
  process.cwd(),
  'RICK',
);

const encrypt = CryptoJS.AES.encrypt(
  RICK_GITHUB_TOKEN,
  CryptoJS.enc.Utf8.parse(RICK_PUBLIC_KEY),
  {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  },
).toString();

const decrypt = CryptoJS.AES.decrypt(
  encrypt,
  CryptoJS.enc.Utf8.parse(RICK_PUBLIC_KEY),
  {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  },
).toString(CryptoJS.enc.Utf8);

export const GITHUB_ACCESS_TOKEN = decrypt;

console.log('encrypt', encrypt);
console.log('decrypt', decrypt);
console.log(RICK_GITHUB_TOKEN === decrypt);
