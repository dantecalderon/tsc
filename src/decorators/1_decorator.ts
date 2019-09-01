namespace One {
  function simpleDecorator(constructor: Function) {
    console.log("simpleDecorator called.");
  }

  // Decorator is called in definition of class not in an instance
  @simpleDecorator
  class ClassWithSimpleDecorator {}

  const instance_1 = new ClassWithSimpleDecorator();
  const instance_2 = new ClassWithSimpleDecorator();
}
