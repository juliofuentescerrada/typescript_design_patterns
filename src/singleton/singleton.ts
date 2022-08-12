export class ChocolateBoiler {
  private _empty = true;
  private _boiled = false;
  private _instance?: ChocolateBoiler;

  private constructor() {}

  public get instance(): ChocolateBoiler {
    if (!this._instance) this._instance = new ChocolateBoiler();
    return this._instance;
  }

  public fill(): void {
    if (this._empty) {
      this._empty = false;
      this._boiled = false;
    }
  }

  public drain(): void {
    if (!this._empty && this._boiled) this._empty = true;
  }

  public boil(): void {
    if (!this._empty && !this._boiled) this._boiled = true;
  }
}
