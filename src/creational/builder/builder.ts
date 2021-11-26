interface IAlert {
  message: string;
}

class Alert implements IAlert {
  message: string;
}

interface IAlertBuilder {
  buildAlert(): void;
  setMessage(message: string): void;
  build(): IAlert;
}

class AlertBuilder implements IAlertBuilder {
  alert: Alert;

  buildAlert(): void {
    this.alert = new Alert();
  }

  setMessage(message: string): void {
    if (!this.alert) {
      throw new Error("Do not forget to call method buildAlert first!");
    }

    this.alert.message = message;
  }

  build(): IAlert {
    return this.alert;
  }
}

class Director {
  constructor(private readonly builder: IAlertBuilder) { }

  construct() {
    this.builder.buildAlert();
    this.builder.setMessage("hello");
    return this.builder.build();
  }
}

export class Client {
  run() {
    const builder = new AlertBuilder();
    const director = new Director(builder);

    console.log(director.construct())
  }
}