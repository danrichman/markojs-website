//
// Routes are in a single file to allow us to easily see all of the routes in an application.
// This is obviously subjective, but should avoid confusion when employees move between
// projects and avoids having routes distributed in deeply nested folders everywhere.
//
// Also if we try to have multiple route files that mirror our folder organization
// there might be cases where multiple routes map to the same page controller.
//

module.exports = function(app) {

    var indexTemplate = require('./src/pages/home/index');
    app.get('/', indexTemplate);
    // app.get('/', function(req, res) {
    //     indexTemplate.render({}, res);
    // });

    // app.get('/privacy', require('./src/pages/privacy/index'));
    // app.get('/costs', require('./src/pages/costs/index'));
    //app.get('/contact', require('./src/pages/contact/index'));
    //app.get('/jobs', require('./src/pages/landing/jobs'));

};
