import { Display, WeatherData } from './observer';

describe('Observer pattern', () => {
  const output = { write: jest.fn() };

  describe('A weather display should', () => {
    test('display current conditions when weather data is updated', () => {
      const data = new WeatherData();
      const _ = new Display(data, output);
      data.setMeasurements({ temp: 10, humidity: 10, pressure: 10 });
      expect(output.write).toHaveBeenCalledWith(
        'Current conditions: 10F degree and 10% humidity'
      );
    });
  });
});
