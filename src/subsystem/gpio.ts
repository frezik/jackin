import { LiteEvent, IEventHandler } from "lite-event";
import * as Pins from '../pins';
import * as Subsystems from '../subsystem';


export enum Mode
{
    read
    ,write
}

export enum PullupMode
{
    up
    ,down
    ,floating
}


export abstract class GPIO
    implements Subsystems.Subsystem
{
    private rising_event = new LiteEvent<GPIO, boolean>();
    private falling_event = new LiteEvent<GPIO, boolean>();
    private rising_or_falling_event = new LiteEvent<GPIO, boolean>();


    abstract getPins(): Pins.Pin[];

    abstract getMode(
    ): Promise<Mode>;

    abstract setMode(
        mode: Mode
    ): Promise<void>;

    abstract setValue(
        val: boolean
    ): Promise<void>;

    abstract getValue(
    ): Promise<boolean>;

    abstract getPullup(
    ): Promise<PullupMode>;

    abstract setPullup(
        is_up: PullupMode
    ): Promise<void>;

    onRising( handler: IEventHandler<GPIO, boolean> ): void
    {
        this.rising_event.on( handler );
    }

    onFalling( handler: IEventHandler<GPIO, boolean> ): void
    {
        this.falling_event.on( handler );
    }

    onRisingOrFalling( handler: IEventHandler<GPIO, boolean> ): void
    {
        this.rising_or_falling_event.on( handler );
    }

    protected triggerOnRising(
        value: boolean
    ): void
    {
        this.rising_event.trigger( this, value );
    }

    protected triggerOnFalling(
        value: boolean
    ): void
    {
        this.falling_event.trigger( this, value );
    }

    protected triggerOnRisingOrFalling(
        value: boolean
    ): void
    {
        this.rising_or_falling_event.trigger( this, value );
    }
}
