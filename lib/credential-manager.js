const Configstore = require('configstore');
const Inquirer = require ('inquirer');

class CredentialManager {
    constructor(name){
    this.conf = new Configstore(name);
    }

    async getProvider(){
        let provider = this.conf.get('provider');
        if(provider){
            return provider;
        } else {
let answers = await Inquirer.prompt([{
    type: 'input', name: 'provider', message: 'Enter the URL of the IOTA node that you want to connect to'
}]);
this.conf.set('provider', answers.provider);
return [answers.provider];
        }
    }
}
module.exports = CredentialManager;