Package.describe({
  name: 'simple:rest-json-error-handler',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'simple:rest middleware for handling standard Connect errors',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stubailo/meteor-rest',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('simple:json-routes@1.0.3');
  api.addFiles('json_error_handler.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('test-helpers');
  api.use('simple:json-routes@1.0.3');
  api.use('simple:rest-json-error-handler');
  api.addFiles('json_error_handler_tests.js');
});
