import * as Pins from '../pins';
import * as Subsystems from '../subsystem';


export enum Mode
{
    read
    ,write
}

export enum PullupMode
{
    up
    ,down
    ,floating
}


export abstract class GPIO
    implements Subsystems.Subsystem
{
    abstract getPins(): Pins.Pin[];

    abstract getMode(
    ): Promise<Mode>;

    abstract setMode(
        mode: Mode
    ): Promise<void>;

    abstract setValue(
        val: boolean
    ): Promise<void>;

    abstract getValue(
    ): Promise<boolean>;

    abstract getPullup(
    ): Promise<PullupMode>;

    abstract setPullup(
        is_up: PullupMode
    ): Promise<void>;

    // TODO send event on value change (rising, falling, both)
}
