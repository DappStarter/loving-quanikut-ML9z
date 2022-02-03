require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reward stereo column harvest forum fringe gather'; 
let testAccounts = [
"0x8523afcc2295ae2f30aaaba8e55fe392ceae435573d35ccd6024a4f58a7529a3",
"0x833759c1beae1b83e97d32e1f5f86d2881695685d0215ac805e120ffe0170f84",
"0x492d6daa14cbea03767c11b5fce9a08d0db9021ea231ceccc1b4430ed1ef09ea",
"0x23e977d3de530e6dcf00e76985a21370bec7c3fad640b5b8c7e474b2c2f7c2d4",
"0x5151c02488fc08b7b920d53d729ee5014c9be7f8b8a759fa611054ed9a22f455",
"0xdfd81e01ba604ff082ac611a19bc159ea6c0b123a6b5c555eea8d0bea6c3749a",
"0x858589d612fb7a4d146b73499e4bc6bd10be93ac8e5b076dcaa8a803c20ad32a",
"0x4ab1667a26f7407e6826029ffed58e5b75c4854388b74f0f19f0526ac8c3b530",
"0x2f08db629004fa997a1db1f096a291c0b6b0520d27dd2053c68a7fa1e2152414",
"0x1d85b058794309dd0f35642c77df5026d58d7605143c8f968be2ef40d2ca37fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


