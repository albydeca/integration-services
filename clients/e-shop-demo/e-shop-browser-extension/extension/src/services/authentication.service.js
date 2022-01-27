import { client, setAuthHeader } from '../utils/axios-client';
import * as crypto from "crypto";
import * as ed from "@noble/ed25519";
import bs58 from "bs58";

export const generateSignedNonce = async (id, secretKey) => {
  const url = `${process.env.REACT_APP_E_SHOP_BACKEND_URL}/nonce/${id}`;
  const response = await client.get(url);
  const nonce = response.data.nonce;
  const encodedKey = getHexEncodedKey(secretKey);
  const signedNonce = await signNonce(encodedKey, nonce);
  return signedNonce;
};

// export const authenticate = async (signedNonce, id) => {
// 	try {
// 		const url = `${process.env.REACT_APP_E_SHOP_BACKEND_URL}/authenticate/${id}`;
// 		const response = await client.post(url, JSON.stringify({ signedNonce }));
// 		const jwt = response.data.jwt;
// 		setAuthHeader(jwt);
// 		return true;
// 	} catch (error) {
// 		console.log(error);
// 		return false;
// 	}
// };

const getHexEncodedKey = (base58Key) => {
  return bs58.decode(base58Key).toString('hex');
};

const signNonce = async (secretKey, nonce) => {
  if (nonce.length !== 40) {
    console.log('nonce does not match length of 40 characters!');
    process.exit();
  }
  const hash = crypto.createHash('sha256').update(nonce).digest().toString('hex');
  const signedHash = await ed.sign(hash, secretKey);
  return ed.Signature.fromHex(signedHash).toHex();
};
