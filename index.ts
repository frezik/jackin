import * as Express from 'express';

export {Device} from './src/device';
export * from './src/pins';
export * from './src/subsystem';
export * from './src/subsystem/adc';
export * from './src/subsystem/gpio';
export * from './src/subsystem/i2c';
export * from './src/subsystem/power';
export * from './src/subsystem/pwm';
export * from './src/subsystem/spi';


const PORT = 8000;
const APP = Express();


export function start()
{
    APP.listen( PORT, () => {
        console.log( `Listening on port ${PORT}` );
    });
}
