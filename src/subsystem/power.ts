import * as Subsystems from '../subsystem';

export class Power
{
    private voltage: number = 0.0;

    constructor(
        voltage: number
    ) {
        this.voltage = voltage;
    }


    getVoltage(): number
    {
        return this.voltage;
    }
}
