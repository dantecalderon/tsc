namespace Seis {
  function propertyDec(target: any, propertyKey: string) {
    if (typeof target === "function") {
      console.log(`class name : ${target.name}`);
    } else {
      console.log(`class name : ${target.constructor.name}`);
    }
    console.log(`propertyKey : ${propertyKey}`);
  }

  class StaticClassWithPropertyDec {
    @propertyDec
    static namea: string;
  }
}
