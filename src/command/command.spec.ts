import { RemoteControl } from './command';

describe('Command pattern', () => {
  const output = { write: jest.fn() };

  describe('A remote control should', () => {
    test('turn on the living room light', () => {
      const sut = new RemoteControl(output);
      sut.pressOnButton(0);
      expect(output.write).toHaveBeenCalledWith('Living room light is on.');
    });

    test('turn on the kitchen light', () => {
      const sut = new RemoteControl(output);
      sut.pressOnButton(1);
      expect(output.write).toHaveBeenCalledWith('Kitchen light is on.');
    });

    test('undo the latest action', () => {
      const sut = new RemoteControl(output);

      sut.pressOnButton(2);
      expect(output.write).toHaveBeenCalledWith('Ceiling fan is on.');

      sut.pressUndoButton();
      expect(output.write).toHaveBeenCalledWith('Ceiling fan is on.');
    });
  });
});
