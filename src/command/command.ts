import { Command } from './contracts';

export class Device {
  constructor(private readonly name: string, private readonly output: any) {}

  public turnOn(): void {
    this.output.write(`${this.name} is on.`);
  }

  public turnOff(): void {
    this.output.write(`${this.name} is off.`);
  }
}

export class DeviceOnCommand implements Command {
  constructor(private readonly device: Device) {}

  public execute(): void {
    this.device.turnOn();
  }

  undo(): void {
    this.device.turnOff();
  }
}

export class DeviceOffCommand implements Command {
  constructor(private readonly device: Device) {}

  public execute(): void {
    this.device.turnOff();
  }

  undo(): void {
    this.device.turnOn();
  }
}

export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand?: Command;

  constructor(output: any) {
    const livingRoomLight = new Device('Living room light', output);
    const kitchenLight = new Device('Kitchen light', output);
    const ceilingFan = new Device('Ceiling fan', output);

    this.onCommands = [
      new DeviceOnCommand(livingRoomLight),
      new DeviceOnCommand(kitchenLight),
      new DeviceOnCommand(ceilingFan),
    ];

    this.offCommands = [
      new DeviceOffCommand(livingRoomLight),
      new DeviceOffCommand(kitchenLight),
      new DeviceOffCommand(ceilingFan),
    ];
  }

  public pressOnButton(index: number) {
    this.onCommands[index].execute();
    this.undoCommand = this.onCommands[index];
  }

  public pressOffButton(index: number) {
    this.offCommands[index].execute();
    this.undoCommand = this.offCommands[index];
  }

  public pressUndoButton() {
    this.undoCommand?.undo();
  }
}
