describe("Template", () => {
  const textWithoutExpressions = 'My name is Jan Kowalski';
  const textWithExpressions = 'My name is ${firstName} ${lastName}';

  it("given a text without expressions when evaluate then returns the text", () => {
    const template = new Template(textWithoutExpressions);
    expect(template.evaluate({})).toBe(textWithoutExpressions)
  });

  it("given a text with expressions when evaluate then returns the text with substituted values", () => {
    const template = new Template(textWithExpressions);
    const parameters = {firstName: 'Jan', lastName: 'Kowalski'};
    expect(template.evaluate(parameters)).toBe(textWithoutExpressions)
  });

  it("given a text with expressions when evaluate without providing all values the throws an exception", () => {
    const template = new Template(textWithExpressions);
    expect(() => template.evaluate({})).toThrow();
  });
});

///

class Template {

  private expressionStart = '${';
  private expressionEnd = '}';
  private expressionRegexp = /\${\w+}/;

  constructor(private text: string) {
  }

  evaluate(parameters: {}): string {
    const result = this.substitute(parameters);
    this.validate(result);
    return result;
  }

  private substitute(parameters: {}): string {
    let result = this.text;
    for (let key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        // @ts-ignore
        result = result.replace(this.expression(key), parameters[key])
      }
    }
    return result;
  }

  private validate(result: string) {
    if (this.expressionRegexp.test(result)) {
      throw new Error('Illegal argument exception');
    }
  }

  private expression(key: string): string {
    return this.expressionStart + key + this.expressionEnd
  }

}
