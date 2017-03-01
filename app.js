require('./configure');

var express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , multer  = require('multer')
    , port = process.env.PORT || 8080;

app.use(require('lasso/middleware').serveStatic());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multer({dest:'./public/uploads/'}).array('image'));

// Consolidated Routes file to avoid clobbering
require('./routes')(app);

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // production error handler
// var errorTemplate = require('./src/pages/404/template.marko');
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     errorTemplate.render({}, res);
// });

// If the process was started using browser-refresh then enable hot reloading for certain types
// of files to short-circuit a full process restart.
// You *should* use browser-refresh in development: https://www.npmjs.com/package/browser-refresh
// Developers can enable browser-refresh when starting server > browser-refresh app.js
//require('marko/browser-refresh').enable();
//require('lasso/browser-refresh').enable('*.marko *.css *.less *.styl *.scss *.sass *.png *.jpeg *.jpg *.gif *.webp *.svg');

// The following line allows us to require *.css, *.scss, *.styl and *.less files
// in code that runs on the server, but nothing actually happens on the server
//require('lasso/node-require-no-op').enable('.css', '.scss', '.sass', '.less', '.styl');

var isProduction = (process.env.NODE_ENV === 'production');

app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log('Listening on port %d', port);
    console.log('http://localhost:' + port + '/');

    if (process.send) {
        // The browser-refresh process launcher uses this information
        // to know when it is safe to refresh the browser pages
        // See: https://github.com/patrick-steele-idem/browser-refresh
        process.send('online');
    }
});