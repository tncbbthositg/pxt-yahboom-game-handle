/**
 * Yahboom Basic Game Handle buttons
 */
enum GameControllerButton {
  //% block=red
  Red = DAL.MICROBIT_ID_IO_P13,
  //% block=green
  Green = DAL.MICROBIT_ID_IO_P14,
  //% block=yellow
  Yellow = DAL.MICROBIT_ID_IO_P16,
  //% block=blue
  Blue = DAL.MICROBIT_ID_IO_P15,
  //% block=joystick
  Joystick = DAL.MICROBIT_ID_IO_P8,
}

/**
 * Yahboom Basic Game Handle joystick axes
 */
enum GameControllerJoystickAxis {
  //% block=x-axis
  x = DAL.MICROBIT_ID_IO_P2,
  //% block=y-axis
  y = DAL.MICROBIT_ID_IO_P1,
}

/**
 * Yahboom Basic Game Handle button events
 */
enum GameControllerButtonEvent {
  //% block="down"
  Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
  //% block="up"
  Up = DAL.MICROBIT_BUTTON_EVT_UP,
  // //% block="click"
  // Click = DAL.MICROBIT_BUTTON_EVT_CLICK
}

/**
 * Controls the functions of the Yahboom Basic Game Handle
 */
//% color=#5197D5 weight=100 icon="\uf11b"
//% groups='["Buttons", "Joystick", "Outputs"]'
namespace gameController {
  let hasBeenInitialized = false;

function init(): void {
    hasBeenInitialized = true;

    pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
    pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
    pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
    pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
    pins.setPull(DigitalPin.P8, PinPullMode.PullUp);

    pins.setEvents(DigitalPin.P13, PinEventType.Edge);
    pins.setEvents(DigitalPin.P14, PinEventType.Edge);
    pins.setEvents(DigitalPin.P15, PinEventType.Edge);
    pins.setEvents(DigitalPin.P16, PinEventType.Edge);
    pins.setEvents(DigitalPin.P8, PinEventType.Edge);
  }

  /**
   * Returns true if the button is down
   * @param button the button to test
   */
  //% blockId="gameHandle_isButtonDown" block="is %button down"
  //% weight=1
  //% group="Buttons"
  export function isButtonDown(button: GameControllerButton): boolean {
    init();
    const pin = <DigitalPin><number>button;
    return pins.digitalReadPin(pin) === 0;
  }

  /**
   * Do something when one of the buttons is pressed
   * @param button the button to watch
   * @param event the event to watch for
   */
  //% group="Buttons"
  //% blockId="gameHandle_onButtonEvent" block="on %button button|%event"
  export function onButtonEvent(button: GameControllerButton, event: GameControllerButtonEvent, handler: Action) {
    init();
    control.onEvent(<EventBusSource><number>button, <EventBusValue><number>event, handler);
  }

  /**
   * Returns the percentage deflection of the joystick
   * @param axis the axis to read the value of
   */
  //% blockId="gameHandle_joystickValue" block="joystick deflection of %axis"
  //% group="Joystick"
  export function joystickValue(axis: GameControllerJoystickAxis): number {
    const pin = <AnalogPin><number>axis;
    const value = pins.analogReadPin(pin);
    const percentage = Math.map(value, 0, 1023, -100, 100);

    if (axis === GameControllerJoystickAxis.x) { return percentage * -1; }
    return percentage;
  }
}