describe("mean.js", function () {

  load("javascripts/mean.js");

  describe("Math.prototype.mean", function () {
    it("returns the average for an array of numbers", function () {
      expect(Math.mean([1,2,3,4,5,12])).toEqual(4.5);
    });

    it("returns 0 for empty arrays", function () {
      expect(Math.mean([])).toEqual(0);
    });
  });
});
