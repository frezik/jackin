import * as Pins from '../pins';
import * as Subsystems from '../subsystem';


export abstract class ADC
    implements Subsystems.Subsystem
{
    abstract getPins(): Pins.Pin[];

    abstract getMinValue(): number;

    abstract getMaxValue(): number;

    abstract getValue(): Promise<number>;
}
