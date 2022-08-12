export interface IFlyBehavior {
  fly(): void;
}

export class FlyWithWings implements IFlyBehavior {
  constructor(private output: any) {}

  fly(): void {
    this.output.write('Flying with wings');
  }
}

export class FlyWithRocket implements IFlyBehavior {
  constructor(private output: any) {}

  fly(): void {
    this.output.write("I'm flying with a rocket! 🚀");
  }
}
