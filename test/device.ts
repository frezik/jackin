import * as Tap from 'tap';
import * as Jackin from '../index';
import * as Mock from './mock';


const device = new Mock.Device();
Tap.ok( device as Jackin.Device, "Mock device is a Device" );
