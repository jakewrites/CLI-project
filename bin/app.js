#! /usr/bin/env node
const CredentialManager = require('../lib/credential-manager');

async function Main () {
    const creds = new CredentialManager('wallet');
    let [provider] = await creds.getProvider();
    console.log(provider);
}
Main().catch(console.log(error));
