import * as Pins from './pins';


export interface Subsystem
{
    getPins(): Pins.Pin[];
}
