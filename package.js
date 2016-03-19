Package.describe({
  name: 'clinical:theming',
  version: '0.4.10',
  summary: 'Theming object for ClinicalFramework.  No UI provided; just configuration.',
  git: 'https://github.com/clinical-meteor/clinical-theming',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('session');

  api.addFiles('client/helpers.js', 'client');
  api.addFiles('objects/Theme.js', 'client');

  api.export('Theme');
});



Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:theming');
});
