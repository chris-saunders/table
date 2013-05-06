define([
  "scripts/views/TableView"
], function(TableView) {

  describe("Component | Table - View", function() {

    var tableView,
        testModel,
        testCollection,
        rowHeader,
        rowHeaders,
        async;

    async = new AsyncSpec(this);

    async.beforeEach(function(done) {
      $('body').append('<div class="wrapper"></div>');
      testModel = Backbone.Model.extend();
      testCollection = Backbone.Collection.extend({
        model: testModel,
        url: 'src/rows.json'
      });
      this.collection = new testCollection();
      this.collection.fetch({
        success: function(collection, response, options) {
          tableView = new TableView({ collection: collection }).render();
          done();
        }
      });
      
    });

    async.afterEach(function(done) {
      tableView.remove();
      $('.wrapper').remove();
      done();
    });

    it("should be tied to a DOM element when created, based off the property provided", function(done) {
      expect(tableView.el.tagName.toLowerCase()).toBe('div');
    });

    it("should have a class of 'wrapper'", function() {
      expect(tableView.el).toHaveClass('table');
    });

    it("should accept an headers model", function() {
      rowHeader = Backbone.Model.extend();
      rowHeaders = Backbone.Collection.extend({
        model: rowHeader,
        url: 'src/rowHeaders.json'
      });
      tableView.rowHeaders = new rowHeaders();
      tableView.rowHeaders.fetch({
        success: function(collection, response, options) {
          console.log(tableView.rowHeaders.toJSON())
          tableView.render();
          console.log(tableView.el);
          expect(tableView.$('th')).toBeVisible();    
        }
      });
      
    });

    it("is backed by a model instance", function() {
      expect(tableView.collection).toBeDefined();
      expect(tableView.collection.at(0).get('artist')).toBeTruthy();
    });

    it("should render the Table Template properly", function() {
      
      // expect(tableView.$('h1'))
      //   .toHaveText('Welcome to Nukebox');
    });

    // it("should invoke player properly", function() {
    //   tableView.render();
    //   expect(tableView.$('.player')).toBeVisible();
    // });

    // it("should invoke search properly", function() {
    //   tableView.render();
    //   expect(tableView.$('.search')).toBeVisible();
    // });

  });

});