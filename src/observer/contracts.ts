export type Measurements = {
  temp: number;
  humidity: number;
  pressure: number;
};

export interface Observer {
  update(measurements: Measurements): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
