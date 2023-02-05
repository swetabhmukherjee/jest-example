const main = require("./main");

let response = "Real Function Response";

main.getValues = jest.fn().mockReturnValue("Mock Function Response");

describe('Beverage()', () => {
   it('should be delicious', () => {
      expect(main.getValues()).toBe(response);
   });
});