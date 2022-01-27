import { generateNonce } from '../services/authentication.service';
import { useState } from 'react';

const SignIn = () => {
    const [identityId, setIdentityId] = useState()
    const [nonce, setNonce] = useState()

  const signInUser = async () => {
    const nonce = await generateNonce(identityId);
    setNonce(nonce)
  };

  return (
    <>
      <input type="text" placeholder="Identity ID"></input>
      <input type="password" placeholder="Secret key" onChange={event => setIdentityId(event.target.value)}></input>
      <button onClick={signInUser}>Sign in</button>
      {nonce}
    </>
  );
};

export default SignIn;
