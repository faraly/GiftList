const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const example = "Oscar Hammes"
const merkleTree = new MerkleTree(niceList);
async function main() {
  // create the merkle tree for the whole nice list
 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: example,
    proof: getProof(example)
  });

  console.log({ gift });
}

function getProof(name){
  const index = niceList.findIndex(n => n === name);
  return merkleTree.getProof(index);
}


main();