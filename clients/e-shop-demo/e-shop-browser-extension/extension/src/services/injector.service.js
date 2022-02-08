import { generateSignedNonce } from './authentication.service';

export const injectSignedNonce = () => {
  // eslint-disable-next-line no-undef
  chrome.storage.local.get('nonce', async ({ identityId,  secretKey}) => {
    const nonce = await generateSignedNonce(identityId, secretKey);
    document.getElementById('signedNonce').value = nonce;
  });
};
