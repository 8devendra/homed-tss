// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '\\fire-db\\src\\'));

// console.log(__dirname + '\\fire-db\\src\\');
// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'\\src\\index.html'));

// console.log(__dirname+'\\src\\index.html');
// });


// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

// console.log('Jo0');
//2222222222222222222222222222222222
//Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static('./dist/fire-db'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/fire-db/'}),

// );

// // Start the app by listening on the default Heroku port

// app.listen(process.env.PORT || 8080);



////33333333333333333333


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/fire-db'));
console.log(__dirname + '/dist/fire-db');
app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/fire-db/index.html'));
console.log(__dirname+'/dist/fire-db/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
