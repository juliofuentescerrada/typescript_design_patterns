export interface IQuackBehavior {
  quack(): void;
}

export class DefaultQuack implements IQuackBehavior {
  constructor(private output: any) {}

  quack(): void {
    this.output.write('Quack, quack');
  }
}

export class MuteQuack implements IQuackBehavior {
  constructor(private output: any) {}

  quack(): void {
    this.output.write('<< silence >>');
  }
}
