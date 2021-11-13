require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet royal night essay good merry fog soldier'; 
let testAccounts = [
"0xfeacfc53a6723c9ccd9b4949b4738ae4565f21953734ab326c5983d0cff16cb1",
"0xbf1c8220c275ec2e53bdf66fe27b34d4df790fa9d0cb3e7e6ae4c8747e7cd707",
"0x3f863beab71655594459d861982f69540f5f4e00f370ff025951c2aa6d5df37e",
"0x4421567a11bff84e91347d5df8bf6a06f182380e11707fc497e7d2152dad36c7",
"0xc9bd51eda1628e54c7111324c4e3ebd9b27f71294b1e28327f5bc95b1fb00d2a",
"0x8d1f931733c5b5eadeaa72a26ceb520c12891c7bf47b04449c2e487c1923017b",
"0x68d9ee963e3aac66dc2e83bf9a1cbdd12826beb7d59cc892b532fe5434e754fd",
"0xcfc1a77f9d2c8a74f4af03f2a89be3903bb535bc151a0d3093d8c0e8d0d4355b",
"0xcb62952a4846986d8ff4646107f832def0c746a7d35404c48a3d7fe0c92c88cc",
"0x0bad3e927fbd0eee61704ee9530010fb08c61bd7a16a958ec11348219eac763c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

