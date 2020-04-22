import * as Tap from 'tap';
import * as Jackin from '../index';
import * as Mock from '../test_lib/mock';

Tap.plan( 7 );


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
}).then( () => {
    gpio.onRising( (gpio, value) => {
        Tap.ok( value == true, "Value rose" );
    });
    gpio.onFalling( (gpio, value) => {
        Tap.ok( value == false, "Value fell" );
    });

    // Should be called twice
    gpio.onRisingOrFalling( (gpio, value) => {
        Tap.pass( "Value rose or fell" );
    });
}).then( () => {
    return gpio.setValue( true );
}).then( () => {
    return gpio.setValue( false );
});
