import * as Pins from '../pins';
import * as Subsystems from '../subsystem';


export abstract class I2C
    implements Subsystems.Subsystem
{
    abstract getPins(): Pins.Pin[];

    abstract read(
        register: number
        ,length: number
    ): Promise< [number] >;

    abstract write(
        register: number
        ,data: [ number ]
    ): Promise< void >;
}
