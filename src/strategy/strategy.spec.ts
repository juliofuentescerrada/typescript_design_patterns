import { FlyWithRocket } from './behaviors/fly_behavior';
import { MallardDuck } from './strategy';
import { MuteQuack } from './behaviors/quack_behavior';

describe('Strategy pattern', () => {
  const output = { write: jest.fn() };

  describe('A mallard duck should', () => {
    test('fly', () => {
      const sut = new MallardDuck(output);
      sut.performFly();
      expect(output.write).toHaveBeenCalledWith('Flying with wings');
    });

    test('quack', () => {
      const sut = new MallardDuck(output);
      sut.performQuack();
      expect(output.write).toHaveBeenLastCalledWith('Quack, quack');
    });

    test('change its fly behavior', () => {
      const sut = new MallardDuck(output);
      sut.changeFlyBehavior(new FlyWithRocket(output));
      sut.performFly();
      expect(output.write).toHaveBeenCalledWith("I'm flying with a rocket! 🚀");
    });

    test('change its quack behavior', () => {
      const sut = new MallardDuck(output);
      sut.changeQuackBehavior(new MuteQuack(output));
      sut.performQuack();
      expect(output.write).toHaveBeenLastCalledWith('<< silence >>');
    });
  });
});
