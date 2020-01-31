import * as Jackin from '../index';
import * as Tap from 'tap';
Tap.pass( "All is well" );


export class MockGPIO
    implements Jackin.GPIO
{
    private pin: Jackin.Pin;
    private mode = Jackin.Mode.read;
    private value = false;
    private pullup = false;

    constructor(
        pin: Jackin.Pin
    )
    {
        this.pin = pin;
    }


    getPins(): Jackin.Pin[]
    {
        return [ this.pin ];
    }


    setMode(
        mode: Jackin.Mode
    ): Promise<void>
    {
        this.mode = mode;
        return new Promise( (resolve, reject) => {
            resolve();
        });
    }

    setValue(
        val: boolean
    ): Promise<void>
    {
        this.value = val;
        return new Promise( (resolve, reject) => {
            resolve();
        });
    }

    getValue(
    ): Promise<boolean>
    {
        return new Promise( (resolve, reject) => {
            resolve( this.value );
        });
    }

    setPullup(
        is_up: boolean
    ): Promise<void>
    {
        this.pullup = is_up;
        return new Promise( (resolve, reject) => {
            resolve();
        });
    }
}

export class MockADC
    implements Jackin.ADC
{
    private pin: Jackin.Pin;
    private value: number = 0;
    private min_value: number = 0;
    private max_value: number = 255;


    constructor( pin: Jackin.Pin )
    {
        this.pin = pin;
    }


    getPins(): Jackin.Pin[]
    {
        return [ this.pin ];
    }

    getMinValue(): number
    {
        return this.min_value;
    }

    getMaxValue(): number
    {
        return this.max_value;
    }

    getValue(): Promise<number>
    {
        return new Promise( (resolve, reject) => {
            resolve( this.value );
        });
    }
}

export class MockPWM
    implements Jackin.PWM
{
    private pin: Jackin.Pin;
    private value: number = 0;
    private min_value: number = 0;
    private max_value: number = 255;


    constructor( pin: Jackin.Pin )
    {
        this.pin = pin;
    }


    getPins(): Jackin.Pin[]
    {
        return [ this.pin ];
    }

    getMinValue(): number
    {
        return this.min_value;
    }

    getMaxValue(): number
    {
        return this.max_value;
    }

    setValue( value: number ): Promise<void>
    {
        this.value = value;
        return new Promise( (resolve, reject) => {
            resolve();
        });
    }
}

export class MockI2C
    implements Jackin.I2C
{
    private pin: Jackin.Pin;
    private addr: number;


    constructor(
        pin: Jackin.Pin
        ,addr: number
    )
    {
        this.pin = pin;
        this.addr = addr;
    }


    getPins(): Jackin.Pin[]
    {
        return [ this.pin ];
    }

    read(
        register: number
        ,length: number
    ): Promise< [number] >
    {
        let data: [number];
        return new Promise( (resolve, reject) => {
            resolve( data );
        });
    }

    write(
        register: number
        ,data: [number]
    ): Promise<void>
    {
        return new Promise( (resolve, reject) => {
            resolve();
        });
    }
}

export class MockSPI
    implements Jackin.SPI
{
    private pin: Jackin.Pin;
    private speed: number;


    constructor(
        pin: Jackin.Pin
        ,speed: number
    )
    {
        this.pin = pin;
        this.speed = speed;
    }


    getPins(): Jackin.Pin[]
    {
        return [ this.pin ];
    }

    read(
        length: number
    ): Promise< [number] >
    {
        let data: [number];
        return new Promise( (resolve, reject) => {
            resolve( data );
        });
    }

    write(
        data: [number]
    ): Promise<void>
    {
        return new Promise( (resolve, reject) => {
            resolve();
        });
    }
}


export class Device
    implements Jackin.Device
{
    private pins_by_num: Jackin.Pin[];
    private pins: Jackin.Pins;


    constructor()
    {
        let power5v_pin = {
            type: Jackin.PinType.V50
            ,number: 1
            ,note: ""
            ,subsystems: {
                power: null
            }
        };
        power5v_pin.subsystems.power = new Jackin.Power( 5.0 );

        let gnd_pin = {
            type: Jackin.PinType.GND
            ,number: 2
            ,note: ""
            ,subsystems: {
                power: null
            }
        };
        gnd_pin.subsystems.power = new Jackin.Power( 0 );

        let gpio1 = {
            type: Jackin.PinType.GPIO
            ,number: 3
            ,note: "" 
            ,subsystems: {
                gpio: null
            }
        };
        gpio1.subsystems.gpio = new MockGPIO( gpio1 );

        let gpio2 = {
            type: Jackin.PinType.GPIO
            ,number: 3
            ,note: "" 
            ,subsystems: {
                gpio: null
            }
        };
        gpio2.subsystems.gpio = new MockGPIO( gpio2 );

        let adc = {
            type: Jackin.PinType.ADC
            ,number: 4
            ,note: "" 
            ,subsystems: {
                adc: null
            }
        };
        adc.subsystems.adc = new MockADC( adc );

        let pwm = {
            type: Jackin.PinType.PWM
            ,number: 4
            ,note: "" 
            ,subsystems: {
                pwm: null
            }
        };
        pwm.subsystems.pwm = new MockPWM( pwm );

        let i2c = {
            type: Jackin.PinType.I2C
            ,number: 5
            ,note: "" 
            ,subsystems: {
                i2c: null
            }
        };
        i2c.subsystems.i2c = new MockI2C( i2c, 0 );

        let spi = {
            type: Jackin.PinType.SPI
            ,number: 6
            ,note: "" 
            ,subsystems: {
                spi: null
            }
        };
        spi.subsystems.spi = new MockSPI( spi, 0 );

        this.pins_by_num = [
            power5v_pin
            ,gnd_pin
            ,gpio1
            ,gpio2
            ,adc
            ,pwm
            ,i2c
            ,spi
        ];

        this.pins = {
            pins: [
                [ this.pins_by_num[0] ,this.pins_by_num[1] ]
                ,[ this.pins_by_num[2] ,this.pins_by_num[3] ]
                ,[ this.pins_by_num[4] ,this.pins_by_num[5] ]
                ,[ this.pins_by_num[6] ,this.pins_by_num[7] ]
            ]
        };
    }


    getPins(): Jackin.Pins
    {
        return this.pins;
    }

    getPin(
        pin: number
    ): Jackin.Pin
    {
        const actual_pin = pin - 1;
        return this.pins_by_num[ actual_pin ];
    }
}
