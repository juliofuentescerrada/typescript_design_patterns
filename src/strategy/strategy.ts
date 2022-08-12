import { DefaultQuack, IQuackBehavior } from './behaviors/quack_behavior';
import { FlyWithWings, IFlyBehavior } from './behaviors/fly_behavior';

abstract class Duck {
  constructor(
    private flyBehavior: IFlyBehavior,
    private quackBehavior: IQuackBehavior
  ) {}

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public changeFlyBehavior(flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public changeQuackBehavior(quackBehavior: IQuackBehavior) {
    this.quackBehavior = quackBehavior;
  }
}

export class MallardDuck extends Duck {
  constructor(output: any) {
    super(new FlyWithWings(output), new DefaultQuack(output));
  }
}
