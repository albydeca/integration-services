import { generateSignedNonce } from '../services/authentication.service';
import { useState } from 'react';

const SignIn = () => {
    const [identityId, setIdentityId] = useState()
    const [secretKey, setSecretKey] = useState()
    const [nonce, setNonce] = useState()

  const signInUser = async () => {
    const nonce = await generateSignedNonce(identityId, secretKey);
    setNonce(nonce)
  };

  return (
    <>
      <input type="text" placeholder="Identity ID" onChange={event => setIdentityId(event.target.value)}></input>
      <input type="password" placeholder="Secret key" onChange={event => setSecretKey(event.target.value)}></input>
      <button onClick={signInUser}>Sign in</button>
      {nonce}
    </>
  );
};

export default SignIn;
