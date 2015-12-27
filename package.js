Package.describe({
  name: 'clinical:theming',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Theming component for ClinicalFramework.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/clinical-meteor/clinical-theming',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');
  api.use('session');

  api.use('clinical:glass-ui@1.3.1');
  api.use('clinical:router@2.0.17');

  api.addFiles('client/components/themingCard/themingCard.html', 'client');
  api.addFiles('client/components/themingCard/themingCard.js', 'client');
  api.addFiles('client/components/themingCard/themingCard.less', 'client');

  api.addFiles('client/components/themingPage/themingPage.html', 'client');
  api.addFiles('client/components/themingPage/themingPage.js', 'client');
  //api.addFiles('client/components/themingPage/themingPage.less', 'client');

});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:theming');
  api.addFiles('tests/tinytest/theming-tests.js');
});
