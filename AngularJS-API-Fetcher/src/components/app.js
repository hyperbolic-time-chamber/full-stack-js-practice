angular.module('api-fetcher')

  .controller('AppCtrl', function () {

  })

  .component('app', {
    controller: 'AppCtrl',
    template:
      `
      <div id="app">
        <h1>AngularJS API Fetcher</h1>
        <div>
        Search
          <search/>
        </div>
        <div>
        Video List
          <video-list/>
        </div>
      </div> 
  
    `
  })