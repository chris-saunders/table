define([
  "scripts/models/table",
  "scripts/views/TableView",
  "text!src/rows.json"
], function(Table, TableView, Rows) {

  describe("Component | Table - View", function() {

    var view,
        model,
        columnTitles,
        data;

    beforeEach(function() {
      $('body').append('<div class="tableWrapper"></div>');
      model = new Table();
      model.set({ data: Rows });
      view = new TableView({ model: model }).render();
    });

    afterEach(function() {
      view.remove();
      $('.tableWrapper').remove();
    });

    it("should be tied to a DOM element when created, based off the property provided", function() {
      expect(view.el.tagName.toLowerCase()).toBe('div');
    });

    it("should stipulate presence of either columnTitles or data", function() {
      // model.set({});
      // expect(model.validationError).toBe('Column title object or data array must be provided');
    });

    
  });

});