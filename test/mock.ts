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
            note: ""
            ,power: null
        };
        power5v_pin.power = new Jackin.Power( 5.0 );

        let gnd_pin = {
            note: ""
            ,power: null
        };
        gnd_pin.power = new Jackin.Power( 0 );

        let gpio1 = {
            note: "" 
            ,gpio: null
        };
        gpio1.gpio = new MockGPIO( gpio1 );

        let gpio2 = {
            note: "" 
            ,gpio: null
        };
        gpio2.gpio = new MockGPIO( gpio2 );

        let adc = {
            note: "" 
            ,adc: null
        };
        adc.adc = new MockADC( adc );

        let pwm = {
            note: "" 
            ,pwm: null
        };
        pwm.pwm = new MockPWM( pwm );

        let i2c_sda = {
            note: "" 
            ,i2c: null
            ,gpio: null
        };
        let i2c_sdc = {
            note: "" 
            ,i2c: null
            ,gpio: null
        };
        i2c_sda.i2c
            = i2c_sdc.i2c
            = new MockI2C( i2c_sda, 0 );
        i2c_sda.gpio = new MockGPIO( i2c_sda );
        i2c_sdc.gpio = new MockGPIO( i2c_sdc );

        let spi_miso = {
            note: "" 
            ,spi: null
        };
        let spi_mosi = {
            note: "" 
            ,spi: null
        };
        let spi_clk = {
            note: "" 
            ,spi: null
        };
        spi_miso.spi
            = spi_mosi.spi
            = spi_clk.spi 
            = new MockSPI( spi_mosi, 0 );

        let multi_pin = {
            note: "" 
            ,adc: null
            ,gpio: null
        };
        multi_pin.adc = new MockADC( multi_pin );
        multi_pin.gpio = new MockGPIO( multi_pin );

        this.pins_by_num = [
            power5v_pin
            ,gnd_pin
            ,gpio1
            ,gpio2
            ,adc
            ,pwm // pin index 5
            ,i2c_sda
            ,spi_miso
            ,multi_pin
            ,spi_mosi
            ,gnd_pin // pin index 10
            ,spi_clk
            ,i2c_sdc
        ];

        this.pins = {
            pins: [
                [ this.pins_by_num[0] ,this.pins_by_num[1] ]
                ,[ this.pins_by_num[2] ,this.pins_by_num[3] ]
                ,[ this.pins_by_num[4] ,this.pins_by_num[5] ]
                ,[ this.pins_by_num[6] ,this.pins_by_num[7] ]
                ,[ this.pins_by_num[8] ,this.pins_by_num[9] ]
                ,[ this.pins_by_num[10] ,this.pins_by_num[11] ]
                ,[ this.pins_by_num[12] ,null ]
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
