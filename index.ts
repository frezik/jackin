import * as Express from 'express';


const PORT = 8000;
const APP = Express();


APP.listen( PORT, () => {
    console.log( `Listening on port ${PORT}` );
});
