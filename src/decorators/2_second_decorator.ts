namespace Two {
  function simpleDecorator(constructor: Function) {
    console.log("simpleDecorator called.");
  }

  function secondDecorator(constructor: Function) {
    console.log("secondDecorator called");
  }

  // Decorator is called in definition of class not in an instance
  // Decorators are called to up
  @simpleDecorator
  @secondDecorator
  class ClassWithSimpleDecorator {}

  const instance_1 = new ClassWithSimpleDecorator();
  const instance_2 = new ClassWithSimpleDecorator();
}
