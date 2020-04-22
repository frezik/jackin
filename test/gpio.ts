import * as Tap from 'tap';
import * as Jackin from '../index';
import * as Mock from './mock';


const device = new Mock.Device();

const gpio_pin = <Jackin.GPIOPin> device.getPin( 3 );
const gpio = gpio_pin.gpio;

gpio.getMode().then( (mode) => {
    Tap.ok( mode == Jackin.Mode.read, "GPIO defaults to read mode" );
}).then( () => {
    return gpio.getPullup();
}).then( (mode) => {
    Tap.ok( mode == Jackin.PullupMode.floating,
        "Pullup defaults to floating" );
}).then( () => {
    return gpio.getValue();
}).then( (value) => {
    Tap.ok( value == false, "Value defaults to false" );
});
