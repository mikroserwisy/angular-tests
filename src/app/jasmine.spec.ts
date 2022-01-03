describe("Calculation tests", () => {
  it("should add numbers", () => {
    // given
    const firstNumber = 2;
    const secondNumber = 3;
    // when
    const actual = add(firstNumber, secondNumber);
    // then
    expect(actual).toBe(5);
  });
});

describe("Async functions tests", () => {

  let result = 0;

  beforeEach((done) => {
    setTimeout(() => {
      result = 5;
      done();
    }, 1000);
  });

  it("should calculate result", () => {
    expect(result).toBe(5);
  });

});

describe("Clock tests", () => {

  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("should get async result", () => {
    asyncTask();
    jasmine.clock().tick(1000);
    expect(asyncResult).toBe(5);
  });

  it("should verify expected date", () => {
    let date = new Date(2022, 1, 1);
    jasmine.clock().mockDate(date);
    jasmine.clock().tick(100);
    expect(new Date().getTime()).toBe(date.getTime() + 100);
  });

});

describe("Calculator tests", () => {

  let calculator: Calculator;
  let memory: Memory;

  beforeEach(() => {
    console.log("Before test...")
    memory = new Memory();
    //memory = jasmine.createSpyObj<Memory>(['setValue'])
    calculator = new Calculator(memory);
  });

  afterEach(() => {
    console.log("After test...")
  });

  beforeAll(() => {
    console.log("Before tests...")
  });

  afterAll(() => {
    console.log("After tests...")
  });

  it("should add numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it("should store result in memory", () => {
    spyOn(memory, 'setValue')
    calculator.add(2, 5);
    //expect(memory.setValue).toHaveBeenCalled();
    expect(memory.setValue).toHaveBeenCalledWith(7);
  });

  describe("Division", () => {

    it("should throw when divide by value lower than 1", () => {
      expect(() => calculator.divide(5, 0)).toThrow();
    })

    xit("should throw when divide by value lower than 1", () => {
      try {
        calculator.divide(5, 0);
        fail();
      } catch (e) {
        expect().nothing();
      }
    });

  });

});

//

function add(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

class Memory {

  private value = 0;

  setValue(value: number) {
    this.value = value;
    console.log(`New value ${value}`);
  }

}

class Calculator {

  constructor(private memory: Memory) {
  }

  add(firstNumber: number, secondNumber: number) {
    const result = firstNumber + secondNumber;
    this.memory.setValue(result);
    return result;
  }

  divide(firstNumber: number, secondNumber: number) {
    if (secondNumber < 1) {
      throw new Error();
    }
    const result = firstNumber / secondNumber;
    this.memory.setValue(result);
    return result;
  }

}

let asyncResult = 0;

function asyncTask() {
  setTimeout(function () {
    asyncResult = 5;
  }, 1000);
}
