define([
  "scripts/models/table",
  "scripts/views/TableView",
  "text!src/columnTitles.json",
  "text!src/rows.json"
], function(Table, TableView, ColumnTitles, Rows) {

  describe("View", function() {

    var view,
        model,
        columnTitles,
        rows;

    columnTitles = $.parseJSON(ColumnTitles);
    rows = $.parseJSON(Rows);

    beforeEach(function() {
      $('body').append('<div class="tableWrapper"></div>');
      model = new Table({ rows: rows, columnTitles: columnTitles });
      view = new TableView({ model: model }).render();
    });

    afterEach(function() {
      view.remove();
      model = null;
      $('.tableWrapper').remove();
    });

    it("should be tied to a DOM element when created, based off the property provided", function() {
      expect(view.el.tagName.toLowerCase()).toBe('div');
    });

    it("should render column titles when supplied", function() {
      expect(view.$('tr.columnTitles').html().toString().replace(/\s+/g, '')).toBe('<th>Artist</th><th>Album</th><th>Track</th>');
    });

    it("should re-render on model changes", function() {
      expect(view.el).toContainText('The Beatles');
      model.set({ rows: [{ artist: "Aerosmith", album: "Dudes", track: "Sweet Emotion" }] });
      expect(view.el).toContainText('Aerosmith');
    });
    
  });

});