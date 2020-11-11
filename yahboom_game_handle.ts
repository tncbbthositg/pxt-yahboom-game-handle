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

  /**
   * Shake and buzz!
   * @param intensity intensity between 0 and 1023. eg: 512
   */
  //% blockId="gameHandle_buzz" block="output with intensity %intensity"
  //% group="Outputs"
  export function buzz(intensity: number): void {
    pins.analogWritePin(AnalogPin.P0, intensity);
  }
}