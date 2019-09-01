namespace Cinco {
  function propertyDec(target: any, propertyKey: string) {
    console.log(`target : ${target}`);
    console.log(`target.constructor : ${target.constructor}`);
    console.log(`class name : ` + `${target.constructor.name}`);
    console.log(`propertyKey : ${propertyKey}`);
  }

  class ClassWithPropertyDec {
    @propertyDec
    name: string;
  }
}
