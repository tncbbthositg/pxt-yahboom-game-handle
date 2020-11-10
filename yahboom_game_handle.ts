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
}