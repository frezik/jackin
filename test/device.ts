import * as Tap from 'tap';
import * as Jackin from '../index';
import * as Mock from './mock';


const device = new Mock.Device();
Tap.ok( device as Jackin.Device, "Mock device is a Device" );

const gpio_pin = device.getPin( 3 );
Tap.ok( gpio_pin, "Fetched a pin" );
Tap.ok( gpio_pin.hasOwnProperty( 'gpio' ), "It's a GPIO pin" );

const adc_pin = device.getPin( 5 );
Tap.ok( adc_pin.hasOwnProperty( 'adc' ), "It's an ADC pin" );

const pwm_pin = device.getPin( 6 );
Tap.ok( pwm_pin.hasOwnProperty( 'pwm' ), "It's a PWM pin" );

const i2c_pin = device.getPin( 7 );
Tap.ok( i2c_pin.hasOwnProperty( 'i2c' ), "It's an I2C pin" );

const spi_pin = device.getPin( 8 );
Tap.ok( spi_pin.hasOwnProperty( 'spi' ), "It's an SPI pin" );

const multi_pin = device.getPin( 9 );
Tap.ok( multi_pin.hasOwnProperty( 'gpio' ), "It's a GPIO pin . . . " );
Tap.ok( multi_pin.hasOwnProperty( 'adc' ), " . . . and an ADC pin" );
