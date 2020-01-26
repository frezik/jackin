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

export interface Pin
{
    type: PinType
    ,number: Number
    ,note: String
}

export interface Pins
{
    pins: Pin[][]
}
