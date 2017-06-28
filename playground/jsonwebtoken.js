const jwt = require('jsonwebtoken');

//jwt.sign
//jwt.verify

var data = {
  id: 30
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
