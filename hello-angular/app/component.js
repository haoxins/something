
(app => {
  app.AppComponent = ng.core
    .Component({
      selector: '.app',
      template: '<h1>hello, angular</h1>'
    })
    .Class({
      constructor: function () {
    }
  })
})(window.app || (window.app = {}))
