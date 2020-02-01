import * as Subsystem from './subsystem';
import { ADC } from './subsystem/adc';
import { GPIO } from './subsystem/gpio';
import { I2C } from './subsystem/i2c';
import { Power } from './subsystem/power';
import { PWM } from './subsystem/pwm';
import { SPI } from './subsystem/spi';


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

export interface Pin
{
    note: String
}

export interface GPIOPin
{
    note: String
    gpio: GPIO
}

export interface PowerPin
{
    note: String
    power: Power
}

export interface ADCPin
{
    note: String
    adc: ADC
}

export interface I2CPin
{
    note: String
    i2c: I2C
}

export interface SPIPin
{
    note: String
    spi: SPI
}

export interface Pins
{
    pins: Pin[][]
}
