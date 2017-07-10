const axios = require('axios');


const bitcore = require('bitcore-lib-dash')
const Mnemonic = require('bitcore-mnemonic-dash');
const Address = bitcore.Address

bitcore.Networks.defaultNetwork = bitcore.Networks.testnet;

// const bitcoredash = require('./bitcore-dash')
const HDPrivateKey = bitcore.HDPrivateKey('testnet');


var code =    new Mnemonic(Mnemonic.Words.ENGLISH);//'blanket buyer warm job kidney ready promote hint lift color flag melt'    // new Mnemonic(Mnemonic.Words.ENGLISH);
console.log(code)


var knownBytes = bitcore.crypto.Hash.sha256(new Buffer(code.toString()));
console.log(knownBytes)

console.log(18, bitcore.Networks.testnet)
var masterKey = new bitcore.HDPrivateKey.fromSeed(knownBytes, bitcore.Networks.testnet);

console.log('24 masterKey', masterKey, masterKey.toObject())

console.log(`code`, code.toString())   // blanket buyer warm job kidney ready promote hint lift color flag melt
var derived1 =  masterKey.derive(0) //'xprv9s21ZrQH143K27uz3W994QmBrjuUfzTLqeECZQPYy77UGQKpkYmvzpQaYmeFaK77CR8Nq7QR33Vfy2qhqtKQxf1H4AfR7tZYzdKSWt1Y9RK' // code.toHDPrivateKey();


console.log('xpriv', derived1);  // xprv9s21ZrQH143K27uz3W994QmBrjuUfzTLqeECZQPYy77UGQKpkYmvzpQaYmeFaK77CR8Nq7QR33Vfy2qhqtKQxf1H4AfR7tZYzdKSWt1Y9RK
// var retrieved = new HDPrivateKey(xpriv) //'xprv9s21ZrQH143K27uz3W994QmBrjuUfzTLqeECZQPYy77UGQKpkYmvzpQaYmeFaK77CR8Nq7QR33Vfy2qhqtKQxf1H4AfR7tZYzdKSWt1Y9RK'    // new HDPrivateKey(xpriv)
// console.log('retrieved',retrieved) //xprv9s21ZrQH143K27uz3W994QmBrjuUfzTLqeECZQPYy77UGQKpkYmvzpQaYmeFaK77CR8Nq7QR33Vfy2qhqtKQxf1H4AfR7tZYzdKSWt1Y9RK
// console.log(15, code.toHDPrivateKey())
derived2 = masterKey.derive("m/44'/1'/0'/0/0")  //m / purpose' / coin_type' / account' / change / address_index
//https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

console.log('38 derived1', derived1, derived1.toString(), derived1.privateKey.toAddress(), derived1.toObject())
console.log('38 derived2', derived2, derived2.toString(), derived2.privateKey.toAddress(), derived2.toObject())

change = masterKey.derive(2) //.derive("m/44'/1'/0'/0/0")  //m / purpose' / coin_type' / account' / change / address_index

console.log('42 change', change, change.toObject())
console.log('change-address', change.privateKey.toAddress())

var hdPublicKey = masterKey.hdPublicKey;
console.log('hdPublicKey', hdPublicKey)

var addy1 = new Address(hdPublicKey.deriveChild(1).publicKey, 'testnet'); // yMTUoNA7HC9KX4BFCJBe2b3vH5qPGstFbp

var addy2 = new Address(hdPublicKey.deriveChild(2).publicKey, 'testnet'); // yMTUoNA7HC9KX4BFCJBe2b3vH5qPGstFbp

var addy3 = new Address(hdPublicKey.deriveChild(3).publicKey, 'testnet'); // yMTUoNA7HC9KX4BFCJBe2b3vH5qPGstFbp


console.log('pub addy', addy1, addy2, addy3)




/*

Data/Results:

<Mnemonic: glory defy reunion immune arrow twist soft vacuum note sample tumble stool >
<Buffer f5 02 1f 70 6f 11 40 cd fd d9 af 15 a8 a4 22 3a 96 bc 46 71 4e 92 7e 8e 62 05 1d 0d a4 59 8a 81>
18 Network {
  name: 'testnet',
  alias: 'regtest',
  pubkeyhash: 140,
  privatekey: 239,
  scripthash: 19,
  xpubkey: 70617039,
  xprivkey: 70615956,
  port: [Getter],
  networkMagic: [Getter],
  dnsSeeds: [Getter] }
24 masterKey <HDPrivateKey: tprv8ZgxMBicQKsPeeFRjmtrtNETvMFjZpjPzYZhmowKZaQjdCyxoRxg7gruqBPK4JapGawyhhMh9stYsqbxJMDmNk6MimTvibkxd6eYRqydxpB> { network: 'testnet',
  depth: 0,
  fingerPrint: -986599694,
  parentFingerPrint: 0,
  childIndex: 0,
  chainCode: 'b1c7b77782a846a4e814b3480de8cefae413e161122027c0db324b7c358f8595',
  privateKey: '3a0ed6b36df559bd5fa850b41c1eb756d573dd57b25d6c2d51955c44051e6d5b',
  checksum: -1665388788,
  xprivkey: 'tprv8ZgxMBicQKsPeeFRjmtrtNETvMFjZpjPzYZhmowKZaQjdCyxoRxg7gruqBPK4JapGawyhhMh9stYsqbxJMDmNk6MimTvibkxd6eYRqydxpB' }
code glory defy reunion immune arrow twist soft vacuum note sample tumble stool
xpriv <HDPrivateKey: tprv8d2A2gEbCHyq41dZ9ic9HeBbBUGFVKYTjZJkkrHciEEWs8RJNTAoLVdYz5QG4WeCXe5o2stzED1W5617icQWkEFFQiDipSxRJdcVTz2nQya>
38 derived1 <HDPrivateKey: tprv8d2A2gEbCHyq41dZ9ic9HeBbBUGFVKYTjZJkkrHciEEWs8RJNTAoLVdYz5QG4WeCXe5o2stzED1W5617icQWkEFFQiDipSxRJdcVTz2nQya> tprv8d2A2gEbCHyq41dZ9ic9HeBbBUGFVKYTjZJkkrHciEEWs8RJNTAoLVdYz5QG4WeCXe5o2stzED1W5617icQWkEFFQiDipSxRJdcVTz2nQya <Address: ydfu3TZGDUteRYp77M6Dt8mzAbf7rYA9Qm, type: pubkeyhash, network: testnet> { network: 'testnet',
  depth: 1,
  fingerPrint: -1101507903,
  parentFingerPrint: -986599694,
  childIndex: 0,
  chainCode: '58946a379c23c007d571df35a1afd894cbbf569da82ff281d38d90e63bbf5175',
  privateKey: '8489be2f85bbee14ba1fe2d0eaffac4dd4dc007fdd7b11a53189d88303e8bed9',
  checksum: 2004318533,
  xprivkey: 'tprv8d2A2gEbCHyq41dZ9ic9HeBbBUGFVKYTjZJkkrHciEEWs8RJNTAoLVdYz5QG4WeCXe5o2stzED1W5617icQWkEFFQiDipSxRJdcVTz2nQya' }
38 derived2 <HDPrivateKey: tprv8ka7o5Z4inB2crNcR6ssswafZi3z26djUhKH2VWCeM6sMRADpi2h45sBRRnMpdmGUz2sEhNxy71891G6GmU8D7QfFnhTdEpDxZngs35TgHJ> tprv8ka7o5Z4inB2crNcR6ssswafZi3z26djUhKH2VWCeM6sMRADpi2h45sBRRnMpdmGUz2sEhNxy71891G6GmU8D7QfFnhTdEpDxZngs35TgHJ <Address: yakiHTMcBoErcqsAEwkbdg4i9fmu9KwJTD, type: pubkeyhash, network: testnet> { network: 'testnet',
  depth: 5,
  fingerPrint: -1638331527,
  parentFingerPrint: -930735291,
  childIndex: 0,
  chainCode: 'b23ac0a282d2b24b35203c18495a93aa45be6d1e4c2b972f9c0c525d283724c1',
  privateKey: 'e6024d4d8f2346776fdab31d933b7b67de9b2aaa226c64076398ec9c85814f63',
  checksum: 1339995837,
  xprivkey: 'tprv8ka7o5Z4inB2crNcR6ssswafZi3z26djUhKH2VWCeM6sMRADpi2h45sBRRnMpdmGUz2sEhNxy71891G6GmU8D7QfFnhTdEpDxZngs35TgHJ' }
42 change <HDPrivateKey: tprv8d2A2gEbCHyq8RCG7Kib2WHFPdfBf7YrpKQzEeizSFzRU89TfEowK7kRRfJ4v1pHpYSmJqoAzvQJyBqyCJ5MDjgRV3GhRfQMtcF7Wjvz4MA> { network: 'testnet',
  depth: 1,
  fingerPrint: 1770264276,
  parentFingerPrint: -986599694,
  childIndex: 2,
  chainCode: '132731cddd9fea58f116f6c2254498cf54d1a15489d2243ebe58630e046ecbdc',
  privateKey: '8d1fca2e50358e08257247fff87a95b812ce4667281d5e2825e8b635a9bcf6fd',
  checksum: -951170123,
  xprivkey: 'tprv8d2A2gEbCHyq8RCG7Kib2WHFPdfBf7YrpKQzEeizSFzRU89TfEowK7kRRfJ4v1pHpYSmJqoAzvQJyBqyCJ5MDjgRV3GhRfQMtcF7Wjvz4MA' }
change-address <Address: yVwN34b2mZosaMKCjgAgHsz5g6CroDa1ej, type: pubkeyhash, network: testnet>
hdPublicKey <HDPublicKey: tpubD6NzVbkrYhZ4Y7HDdRZTHmtaVNmfj9vJZrAV4KycyrD8ThEjRpnGJBUn1JjUjG4GyorbXxZLcmasdjyMkEQyHQLCcfnASWgiXAJdBJFbGPY>
pub addy <Address: yYGxEHiMHryaTBNPa7V99kCrqYmaPggBVX, type: pubkeyhash, network: testnet> <Address: yVwN34b2mZosaMKCjgAgHsz5g6CroDa1ej, type: pubkeyhash, network: testnet> <Address: yarvBBeP2phBaqT6cCZyShwfW8tVPb59UR, type: pubkeyhash, network: testnet>




=======================================================>>>>>>>


<Mnemonic: fragile hybrid ridge whip differ flavor exist cousin gospel crack joke fun >
<Buffer ea 6d 53 24 b5 cd 2f 44 ce 9e fe 3e 39 68 11 18 2f d0 e6 c3 71 d6 30 38 cc 16 68 25 f0 5f b4 1e>
18 Network {
  name: 'testnet',
  alias: 'regtest',
  pubkeyhash: 140,
  privatekey: 239,
  scripthash: 19,
  xpubkey: 70617039,
  xprivkey: 70615956,
  port: [Getter],
  networkMagic: [Getter],
  dnsSeeds: [Getter] }
24 masterKey <HDPrivateKey: tprv8ZgxMBicQKsPdTGHwAzH1aDJfUjzEm4znDDMXnjYdEyaySnKZzQJMEBL1G6VQ2BpCtqQsN2Noqmt1krDGVDZMzbjc4X5suQGFkQ16d3XYNV> { network: 'testnet',
  depth: 0,
  fingerPrint: 582834300,
  parentFingerPrint: 0,
  childIndex: 0,
  chainCode: '3a50a9002b662bb5f89dd12f610dcdecaaaf6a5f1265ae42117e6fc199284ec3',
  privateKey: '311b49d05c512b17ac314305c803935f9dd7a44541f6d0ed8fe978ef037b7926',
  checksum: -1135917622,
  xprivkey: 'tprv8ZgxMBicQKsPdTGHwAzH1aDJfUjzEm4znDDMXnjYdEyaySnKZzQJMEBL1G6VQ2BpCtqQsN2Noqmt1krDGVDZMzbjc4X5suQGFkQ16d3XYNV' }
code fragile hybrid ridge whip differ flavor exist cousin gospel crack joke fun
xpriv <HDPrivateKey: tprv8bpuBNYbHpdc4abgsEVbNcHW9hqJ77HB6YYMvK2BnYaYmVA1rvGydMrjACPBq5k6jusARkE2EKjynujvnKeddaofkFB4iz3F3tXmpFsi5WK>
38 derived1 <HDPrivateKey: tprv8bpuBNYbHpdc4abgsEVbNcHW9hqJ77HB6YYMvK2BnYaYmVA1rvGydMrjACPBq5k6jusARkE2EKjynujvnKeddaofkFB4iz3F3tXmpFsi5WK> tprv8bpuBNYbHpdc4abgsEVbNcHW9hqJ77HB6YYMvK2BnYaYmVA1rvGydMrjACPBq5k6jusARkE2EKjynujvnKeddaofkFB4iz3F3tXmpFsi5WK <Address: yLZck8UxLD8G3LfXwwEXfGcEgQQyoP5h2i, type: pubkeyhash, network: testnet> { network: 'testnet',
  depth: 1,
  fingerPrint: 44963177,
  parentFingerPrint: 582834300,
  childIndex: 0,
  chainCode: '7713b7ee2a471cc0c408c35a90437946b604bdf9c191fd58718fa659779b2517',
  privateKey: '768b1a96a0a26f58193d5bcf27349a458ce19a10511f00d0efd1faae883c31a3',
  checksum: -864387268,
  xprivkey: 'tprv8bpuBNYbHpdc4abgsEVbNcHW9hqJ77HB6YYMvK2BnYaYmVA1rvGydMrjACPBq5k6jusARkE2EKjynujvnKeddaofkFB4iz3F3tXmpFsi5WK' }
38 derived2 <HDPrivateKey: tprv8kTzfyxHiNJYb3sB6S4NAmqiSDB7bLD9LWUvTdGaiwHHhpXbmiY7vEx3MdeHtdY1ZwzEL1G1wfbvivC5Mxg6kpvfGFEaGxZDVeVGZuHNBjv> tprv8kTzfyxHiNJYb3sB6S4NAmqiSDB7bLD9LWUvTdGaiwHHhpXbmiY7vEx3MdeHtdY1ZwzEL1G1wfbvivC5Mxg6kpvfGFEaGxZDVeVGZuHNBjv <Address: ygBHVbLS1AZ28X4Q6DJ8urajsZcNLF7zSq, type: pubkeyhash, network: testnet> { network: 'testnet',
  depth: 5,
  fingerPrint: -640196377,
  parentFingerPrint: -1171694695,
  childIndex: 0,
  chainCode: 'ccf3cb581799708fe27e05b9fc276ffd89f622480176ee08b935498d222e18a6',
  privateKey: 'a144a2f17d1b06b0e8f83517e2f934951fd7f9944dad4f7ceb7ad3ec5deefcc4',
  checksum: -1095550103,
  xprivkey: 'tprv8kTzfyxHiNJYb3sB6S4NAmqiSDB7bLD9LWUvTdGaiwHHhpXbmiY7vEx3MdeHtdY1ZwzEL1G1wfbvivC5Mxg6kpvfGFEaGxZDVeVGZuHNBjv' }
42 change <HDPrivateKey: tprv8bpuBNYbHpdc8sLd4yy87ULAnW372UdwsehaCdDWHBxaNFj68wxGT4G9pWXvhBAcechNKW4XZ6aFwi1ghbgJ9C13DnBEqUCBySNrUKGQfqL> { network: 'testnet',
  depth: 1,
  fingerPrint: 137178367,
  parentFingerPrint: 582834300,
  childIndex: 2,
  chainCode: '25d56120a8ac1ee315515e5db2f3c946ba09efc1ac004adc8e9d657442adcc4f',
  privateKey: '18385befe182c6fea109645fab74b60c7a3c98755d87a1f0b7d08c53e488c1',
  checksum: 465152851,
  xprivkey: 'tprv8bpuBNYbHpdc8sLd4yy87ULAnW372UdwsehaCdDWHBxaNFj68wxGT4G9pWXvhBAcechNKW4XZ6aFwi1ghbgJ9C13DnBEqUCBySNrUKGQfqL' }
change-address <Address: yM4gNc5TEzXixztsLzGKshN9hGrNibD6Ha, type: pubkeyhash, network: testnet>
hdPublicKey <HDPublicKey: tpubD6NzVbkrYhZ4WvJ5ppesQysREWFvQ6FuMWp8pJmr3Wmyow36CPDtXioCBRXiRmPR2arc3n3nbwxHuSA5c4Jmzd6T63aka8knBD3WbFbvEmB>
pub addy <Address: yRz9ktGfb73WC6hYkTg9HS5uxWftY3RSUm, type: pubkeyhash, network: testnet> <Address: yM4gNc5TEzXixztsLzGKshN9hGrNibD6Ha, type: pubkeyhash, network: testnet> <Address: yXbH14xC5urctDo3davqtQNUVBgR93VQuT, type: pubkeyhash, network: testnet>
<Transaction: 0100000001abb7eef302529c9a7e9b2bf7c13427bcb704c7b310d438f5bed3460d1ab6858d000000006a473044022032c098dabbe0d61a9b1d8c536d29fdeafcd863779deafb6654598be85d9929b5022026e146eeaae5497b66c1565f7be8a360641036f2304104f03d069efed88cd1140121031a3ba06de2b1cb122d5284a1d57bdf5828d394a7a7acc1af5d39276d3d96c9e7ffffffff0140137548170000001976a9143ba52a502c1b1d05ff69836c7d368e2da2c1e2a888ac00000000>





*/



// ====== none HD version ========>

// var privateKey = new bitcore.PrivateKey('testnet');
// console.log('privateKey', privateKey)
// var address = privateKey.toAddress();
// console.log('address', address)
//
//
// var RprivateKey = new bitcore.PrivateKey('testnet');
// var Raddress = privateKey.toAddress();
// console.log('Raddress', address)
//
//

// var utxo = {
//   "txId" : "3e04d07569902cb57ace83866018432e78cf2369628c769b56538c999ae0525b",
//   "outputIndex" : 0,
//   "address" : "yab5diHhJJwjDy5qB77AhiYF9FbPN5WwMM",
//   "script" : "76a9149c86b4e8d9f812ae4e085c74e068b4ea455efbc288ac",
//   "satoshis" : 100000000000
// };

// ====== none HD version ========>

var utxo = {
  "txId" : "40fc6da2fd2784db9b157e39661c25ab538c3cbc2ed34b06e5118c648e9c60c6",
  "outputIndex" : 0,
  "address" : "ydfu3TZGDUteRYp77M6Dt8mzAbf7rYA9Qm",
  "script" : "76a914be5852c150a793cbd88a57643c19a72fe6fd69b688ac",
  "satoshis" : 100000000000
};


var transaction = new bitcore.Transaction()
  .from(utxo)
  .to('yRz9ktGfb73WC6hYkTg9HS5uxWftY3RSUm', 99999880000)
  .sign('8489be2f85bbee14ba1fe2d0eaffac4dd4dc007fdd7b11a53189d88303e8bed9');

console.log(transaction)




// //successful result: {
//     "txid": "9f75753cdb66f857c3537462b943c553a1156fbbb67938f741f01dcefdb77c0a"
// }
