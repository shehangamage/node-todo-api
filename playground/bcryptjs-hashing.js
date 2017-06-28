const bcryptjs = require('bcryptjs');

var password = 'shehan1223';

// bcryptjs.genSalt(10, (err, salt)=>{
//   bcryptjs.hash(password, salt, (err, hash)=>{
//     console.log(hash);
//   });
// });

var hashPassword = '$2a$10$hcGXgzA/pk45/BoDJoP5quGk3pkGzJC80uUX1hqHHC282Z5or6nPC';

bcryptjs.compare(password, hashPassword, (err, result)=>{
  console.log(result);
});
