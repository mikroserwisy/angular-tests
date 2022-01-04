import {CapitalizePipe} from "./capitalize.pipe";

describe('Capitalize pipe', () => {
  it('should capitalize first letter', () => {
    const capitalize = new CapitalizePipe();
    expect(capitalize.transform('test', 1)).toBe('Test');
  });
});
