function methodDec(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  console.log(`target: ${target}`);
  console.log(`methodName : ${methodName}`);
  console.log(`target[methodName] : ${target[methodName]}`);
}

class ClassWithMethodDecorator {
  @methodDec
  print(output: string) {
    console.log(`CLasssWithMethodDec.print` + `${output} called`);
  }
}
