define([
  "scripts/models/table"
], function(Table) {

  describe("Component | Table - Model", function() {

    var model,
        columnTitles,
        data;

    describe("Constructor", function() {

      it("should error if no data is received", function() {
        model = new Table();
        expect(model.validationError).toBe('Must provide either column titles or data');
      });

      it("should be able to accept columnTitles but no data", function() {
        model = new Table({ columnTitles: columnTitles });
        expect(model.get('columnTitles')).toEqual(columnTitles);
        expect(model.get('data')).toEqual([]);
      });

      it("should be able to accept data but no columnTitles", function() {
        model = new Table({ data: data });
        expect(model.get('data')).toEqual(data);
        expect(model.get('columnTitles')).toEqual({});
      });

    });

    beforeEach(function() {
      model = new Table();
      columnTitles = {
        artist: "Artist",
        album: "Album",
        track: "Song"
      };
      data = [
        { artist: "John Lennon", album: "Imagine", track: "Jealous Guy" },
        { artist: "John Lennon", album: "Imagine", track: "Crippled Inside" }
      ];
      
    });

    afterEach(function() {
      model = columnTitles = data = null;
    });

    describe("Validation", function() {

      it("should stipulate an object for columnTitles", function() {
        model.set({ columnTitles: ["artist", "album", "track"] });
        expect(model.validationError).toBe('Column titles must be a key:value object');
      });

      it("should stipulate an array of objects for data", function() {
        model.set({ data: {}, columnTitles: columnTitles });
        expect(model.validationError).toBe('Data must be an array of objects');
      });

    });

  });

});