const { toHex } = require("ethereum-cryptography/utils");
const secp = require ("ethereum-cryptography/secp256k1");

const privateKey = secp.utils.randomPrivateKey();
const publicKey = secp.getPublicKey(privateKey);

console.log('private key: ', toHex(privateKey));

console.log('public key:', toHex(publicKey));
