import * as Pins from '../pins';
import * as Subsystems from '../subsystem';


export abstract class SPI
    implements Subsystems.Subsystem
{
    abstract getPins(): Pins.Pin[];

    abstract read(
        length: number
    ): Promise< [number] >;

    abstract write(
        data: [ number ]
    ): Promise< void >;
}
