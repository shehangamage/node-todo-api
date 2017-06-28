const {SHA256} = require('crypto-js');


var message = 'im shehan';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash} `);

var data = {
  id: 4
};


var token = {
  data,
  hash: SHA256(JSON.stringify(data)+'somesecret').toString()
};

token.data.id = 5;
token.hash = SHA256(JSON.stringify(data)+'somesecret').toString;

var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

if (resultHash === token.hash) {
  console.log('Data was not change');
}else{
  console.log('Data was changed. Do not trust!');
}
