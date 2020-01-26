import * as Express from 'express';

export {Device} from './src/device';
export * from './src/pins';


const PORT = 8000;
const APP = Express();


export function start()
{
    APP.listen( PORT, () => {
        console.log( `Listening on port ${PORT}` );
    });
}
