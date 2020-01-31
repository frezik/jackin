import * as Subsystem from './subsystem';
import { ADC } from './subsystem/adc';
import { GPIO } from './subsystem/gpio';
import { I2C } from './subsystem/i2c';
import { Power } from './subsystem/power';
import { PWM } from './subsystem/pwm';


export enum PinType
{
    V50
    ,V33
    ,V18
    ,GND
    ,GPIO
    ,I2C
    ,SPI
    ,ADC
    ,PWM
}

export interface Subsystems
{
    gpio?: GPIO
    power?: Power
    adc?: ADC
    pwm?: PWM
    i2c?: I2C
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
