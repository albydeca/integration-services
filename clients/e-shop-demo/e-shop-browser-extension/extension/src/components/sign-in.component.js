
import { useState } from 'react';
import { injectSignedNonce } from '../services/injector.service';

const SignIn = () => {
  const [identityId, setIdentityId] = useState();
  const [secretKey, setSecretKey] = useState();

  const onSignInUser = async () => {

    // eslint-disable-next-line no-undef
    chrome.storage.local.set({ identityId,  secretKey});
  };

  const onInjectSignedNonce = async () => {
    // eslint-disable-next-line no-undef
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // eslint-disable-next-line no-undef
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectSignedNonce
    });
  };

  return (
    <>
      <input type="text" placeholder="Identity ID" onChange={(event) => setIdentityId(event.target.value)}></input>
      <input type="password" placeholder="Secret key" onChange={(event) => setSecretKey(event.target.value)}></input>
      <button onClick={onSignInUser}>Sign in</button>
      <button onClick={onInjectSignedNonce}>Inject</button>
    </>
  );
};

export default SignIn;
