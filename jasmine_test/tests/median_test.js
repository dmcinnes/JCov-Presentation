describe("median.js", function () {

  load("javascripts/median.js");

  describe("Math.prototype.median", function () {
    it("returns the median number", function () {
      expect(Math.median([1,2,3,4,5])).toEqual(3);
    });

    it("returns the middle number even if the array isn't sorted", function () {
      expect(Math.median([5,2,1,3,4])).toEqual(3);
    });

    it("works with even lengthed arrays", function () {
      expect(Math.median([2,1,3,4])).toEqual(3);
    });

    it("returns undefined for empty arrays", function () {
      expect(Math.median([])).toBeUndefined();
    });
  });
});
