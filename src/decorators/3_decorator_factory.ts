function decoratorFactory(name: string) {
  return function(constructor: Function) {
    console.log(`Decorator function is called with : ${name}`);
  };
}

@decoratorFactory("Dante")
@decoratorFactory("Hemerson")
class ClassWithDecoratorFactory {}
