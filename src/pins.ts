import * as Subsystem from './subsystem';
import { GPIO } from './subsystem/gpio';
import { Power } from './subsystem/power';


export enum PinType
{
    V50
    ,V33
    ,V18
    ,GND
    ,GPIO
    ,I2C
    ,SPI
}

export interface Subsystems
{
    gpio?: GPIO
    power?: Power
}

export interface Pin
{
    type: PinType
    ,number: Number
    ,note: String
    ,subsystems: Subsystems
}

export interface Pins
{
    pins: Pin[][]
}
