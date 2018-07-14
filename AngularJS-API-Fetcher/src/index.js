angular.module('api-fetcher', [])
  .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self'
    ]);
  });
