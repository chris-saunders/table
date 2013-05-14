define([
  "scripts/models/table",
  "text!src/columnTitles.json",
  "text!src/rows.json"
], function(Table, ColumnTitles, Rows) {

  describe("Model", function() {

    var model,
        columnTitles = $.parseJSON(ColumnTitles),
        rows = $.parseJSON(Rows);

    beforeEach(function() {
      model = new Table();
    });

    afterEach(function() {
      model = null;
    });

    it("is defined", function() {
      expect(model).not.toBeUndefined();
    });

    // Duck-typing, although I have my reservations
    it("looks like a BB model", function() {
      expect(_.isFunction(model.get)).toBe(true);
      expect(_.isFunction(model.set)).toBe(true);
    });

    describe("Constructor", function() {

      it("should error if no data is received", function() {
        expect(model.validationError).toBe('Must provide either column titles or rows');
      });

      it("should be able to accept column titles but no rows", function() {
        model = new Table({ columnTitles: columnTitles });
        expect(model.get('columnTitles')).toEqual(columnTitles);
        expect(model.get('rows')).toEqual([]);
      });

      it("should be able to accept rows but no column titles", function() {
        model = new Table({ rows: rows });
        expect(model.get('rows')).toEqual(rows);
        expect(model.get('columnTitles')).toEqual({});
      });

    });

    describe("Validation", function() {
      
      beforeEach(function() {
        model = new Table({ columnTitles: columnTitles, rows: rows });
      });

      afterEach(function() {
        model = null;
      });

      it("should stipulate an object for column titles", function() {
        model.set({ columnTitles: '' });
        expect(model.validationError).toBe('Column titles must be a key:value object');
      });

      it("should stipulate an array of objects for rows", function() {
        model.set({ rows: {}, columnTitles: columnTitles });
        expect(model.validationError).toBe('Rows must be an array of objects');
      });

    });

  });

});