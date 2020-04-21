import * as Pins from './pins';


export interface Device
{
    getPins(): Pins.Pins;

    getPin(
        pin: number
    ): Pins.Pin;

    maxPinNum(): number;
}
