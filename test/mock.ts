import * as Tap from 'tap';
import * as Jackin from '../index';
Tap.pass( "All is well" );


export class Device
    implements Jackin.Device
{
    private pins: Jackin.Pins = {
        pins: [
            [
                { type: Jackin.PinType.V50, number: 1, note: "" }
                ,{ type: Jackin.PinType.GND, number: 2, note: "" }
            ]
            ,[
                { type: Jackin.PinType.GPIO, number: 3, note: "" }
                ,{ type: Jackin.PinType.GPIO, number: 4, note: "" }
            ]
        ]
    };


    /*
    getSubsystems(): Jackin.Subsystem[]
    {
    }
     */

    getPinDefinition(): Jackin.Pins
    {
        return this.pins;
    }
}
