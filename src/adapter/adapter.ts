import { Duck, Turkey } from './contracts';

export class WildTurkey implements Turkey {
  constructor(private readonly output: any) {}

  fly(): void {
    this.output.write('Flying a short distance');
  }

  gobble(): void {
    this.output.write('Gobble, gobble');
  }
}

export class TurkeyToDuckAdapter implements Duck {
  constructor(private readonly turkey: Turkey) {}

  fly(): void {
    for (let index = 0; index < 5; index++) {
      this.turkey.fly();
    }
  }

  quack(): void {
    this.turkey.gobble();
  }
}
