import { TurkeyToDuckAdapter, WildTurkey } from './adapter';

describe('Adapter pattern', () => {
  const output = { write: jest.fn() };
  const turkey = new WildTurkey(output);
  const duck = new TurkeyToDuckAdapter(turkey);

  describe('An adapted turkey should', () => {
    test('fly as a duck', () => {
      duck.fly();
      expect(output.write).toBeCalledTimes(5);
      expect(output.write).toHaveBeenCalledWith('Flying a short distance');
    });

    test('quack as a duck', () => {
      duck.quack();
      expect(output.write).toHaveBeenCalledWith('Gobble, gobble');
    });
  });
});
