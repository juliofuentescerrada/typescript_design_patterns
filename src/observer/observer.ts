import { Measurements, Observer, Subject } from './contracts';

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private measurements: Measurements = { temp: 0, humidity: 0, pressure: 0 };

  public registerObserver(observer: Observer): void {
    this.observers = [...this.observers, observer];
  }

  public removeObserver(observer: Observer): void {
    this.observers = [...this.observers.filter((e) => e !== observer)];
  }

  public notifyObservers(): void {
    this.observers.forEach((e) => e.update(this.measurements));
  }

  public setMeasurements(measurements: Measurements) {
    this.measurements = measurements;
    this.notifyObservers();
  }
}

export class Display implements Observer {
  constructor(subject: Subject, private output: any) {
    subject.registerObserver(this);
  }

  update({ temp, humidity }: Measurements): void {
    this.output.write(
      `Current conditions: ${temp}F degree and ${humidity}% humidity`
    );
  }
}
