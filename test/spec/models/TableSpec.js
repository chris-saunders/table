define([
  "scripts/models/table"
], function(Table) {

  describe("Component | Table - Model", function() {

    var model,
        columnTitles,
        data;

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

    it("should be able to accept columnTitles but no data", function() {
      model.set({ columnTitles: columnTitles });
      expect(model.get('columnTitles')).toEqual(columnTitles);
      expect(model.get('data')).toEqual([]);
    });

    it("should be able to accept data but no columnTitles", function() {
      model.set({ data: data });
      expect(model.get('data')).toEqual(data);
      expect(model.get('columnTitles')).toEqual({});
    });

    describe("Validation", function() {

      it("should stipulate an object for columnTitles", function() {
        model.set({ columnTitles: ["artist", "album", "track"] }, { validate: true });
        expect(model.validationError).toBe('Column titles must be a key:value object');
      });
    });

  });

});