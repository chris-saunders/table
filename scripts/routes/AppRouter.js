define([
  'jquery',
  'lodash',
  'backbone',
  'views/TableView'
], function($, _, Backbone, TableView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'default'
    }
  });
  
  var initialize = function(){

    var appRouter = new AppRouter;

    appRouter.on('route:default', function (actions) {     
      var tableView = new TableView({ 
        model: new Backbone.Model()
      }).render();
    });

    Backbone.history.start({ pushState: true});
  };

  return { 
    initialize: initialize
  };
});