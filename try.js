const Web3 = require('web3');

// Connect to a local Ethereum node (assuming it's running on http://127.0.0.1:7545)
const web3 = new Web3('http://127.0.0.1:7545');

// Replace 'LegalVault' and 'contractAddress' with your actual contract name and address
const legalVaultContract = new web3.eth.Contract(abi, contractAddress);

// Set the account that will send transactions (replace 'accountAddress' and 'privateKey' with your values)
const accountAddress = 'your_account_address';
const privateKey = 'your_private_key';

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);

// Set the default account for the contract
legalVaultContract.options.from = account.address;

// Now you can use the 'legalVaultContract' instance in your functions
async function fetchEvidence() {
    try {
        let evidence = await legalVaultContract.methods.evidenceList("Case123").call();
        console.log(evidence);
    } catch (error) {
        console.error(error);
    }
}

fetchEvidence();
