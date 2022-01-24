const mathOperations = require('./calculator');
 
describe("Calculator tests", () => {
    let input1 = 0
    let input2 = 0
    
    beforeAll(() => {
      console.log("beforeAll called");
    });
    
    afterAll(() => {
      console.log("afterAll called");
    });
     beforeEach(() => {
      console.log("beforeEach called");
      input1 = 1;
      input2 = 2;
    });
     afterEach(() => {
      console.log("afterEach called");
    });
 test('adding 55 + 55 should return 110', () => {
   // arrange and act
   let result = mathOperations.sum(55,55)
 
   // assert
   expect(result).toBe(110);
 });
 
 test("subtracting 3 from 7 should return 4", () => {
   // arrange and act
   let result = mathOperations.diff(7,3)
 
   // assert
   expect(result).toBe(4);
 });
 
 test("multiplying 32 and 2 should return 64", () => {
   // arrange and act
   let result = mathOperations.product(2,32)
 
   // assert
   expect(result).toBe(64);
 });
})