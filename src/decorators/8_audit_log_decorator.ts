namespace AuditLog {
  function auditLogDec(
    target: any,
    methodName: string,
    decriptor?: PropertyDescriptor
  ) {
    const originalFunction = target[methodName];
    console.log("Appplied");
    const auditFunction = function() {
      console.log(`auditLogDec : overide of ` + ` ${methodName} called `);
      originalFunction.apply(this, arguments);
    };

    // Replace function the own custom function
    target[methodName] = auditFunction;
  }

  class ClassWithAuditDec {
    @auditLogDec
    print(output: string) {
      console.log(`Class with method print ${output} called.`);
    }
  }

  const instance = new ClassWithAuditDec();
  instance.print("Hola");
}
