import * as Tap from 'tap';
import * as Jackin from '../index';
import * as Mock from './mock';


const device = new Mock.Device();
Tap.ok( device as Jackin.Device, "Mock device is a Device" );

const gpio_pin = device.getPin( 3 );
Tap.ok( gpio_pin as Jackin.Pin, "Fetched a pin" );
Tap.ok( gpio_pin.subsystems.gpio, "It's a GPIO pin" );

const adc_pin = device.getPin( 5 );
Tap.ok( adc_pin.subsystems.adc, "It's an ADC pin" );
