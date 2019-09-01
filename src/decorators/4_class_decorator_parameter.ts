function classConstructorDec(constructor: Function) {
  console.log(`constructor: ${constructor}`);
  console.log(`constructor.name : ${(constructor as any).name}`);
  constructor.prototype.testProperty = "testPropertyValue";
  console.log(constructor.prototype);
}

@classConstructorDec
class ClassWithConstructor {}

const instance = new ClassWithConstructor();
console.log((instance as any).testProperty);
