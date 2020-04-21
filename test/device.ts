import * as Tap from 'tap';
import * as Jackin from '../index';
import * as Mock from './mock';


const device = new Mock.Device();
Tap.ok( device as Jackin.Device, "Mock device is a Device" );

Tap.ok( device.maxPinNum() > 0, "Got max pin num" );

const gpio_pin = device.getPin( 3 );
Tap.ok( gpio_pin, "Fetched a pin" );
Tap.ok( gpio_pin.hasOwnProperty( 'gpio' ), "It's a GPIO pin" );

const adc_pin = device.getPin( 5 );
Tap.ok( adc_pin.hasOwnProperty( 'adc' ), "It's an ADC pin" );

const pwm_pin = device.getPin( 6 );
Tap.ok( pwm_pin.hasOwnProperty( 'pwm' ), "It's a PWM pin" );

const i2c_sda_pin = device.getPin( 7 );
Tap.ok( i2c_sda_pin.hasOwnProperty( 'i2c' ), "It's an I2C pin" );

const spi_miso_pin = <Jackin.SPIPin> device.getPin( 8 );
Tap.ok( spi_miso_pin.hasOwnProperty( 'spi' ), "It's an SPI pin" );

const multi_pin = device.getPin( 9 );
Tap.ok( multi_pin.hasOwnProperty( 'gpio' ), "It's a GPIO pin . . . " );
Tap.ok( multi_pin.hasOwnProperty( 'adc' ), " . . . and an ADC pin" );

const spi_mosi_pin = <Jackin.SPIPin> device.getPin( 10 );
Tap.ok( spi_mosi_pin.hasOwnProperty( 'spi' ), "It's an SPI pin" );
Tap.ok( spi_mosi_pin.spi == spi_miso_pin.spi,
    "Refers to same SPI object as MISO pin" );

const i2c_sdc_pin = device.getPin( 13 );
Tap.ok( i2c_sdc_pin.hasOwnProperty( 'i2c' ), "It's an I2C pin" );
Tap.ok( (<Jackin.I2CPin> i2c_sdc_pin).i2c == (<Jackin.I2CPin> i2c_sda_pin).i2c,
    "Refers to same I2C object as SDA pin" );
Tap.ok( (<Jackin.GPIOPin> i2c_sdc_pin).gpio
    != (<Jackin.GPIOPin> i2c_sda_pin).gpio,
    "Does NOT refers to same GPIO object as SDA pin" );
