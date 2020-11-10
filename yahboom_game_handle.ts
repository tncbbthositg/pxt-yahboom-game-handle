/**
 * Yahboom Basic Game Handle buttons
 */
enum YahboomGameHandleButton {
  //% block=red
  Red = <number>DigitalPin.P13,
  //% block=green
  Green = 14,
  //% block=yellow
  Yellow = 15,
  //% block=blue
  Blue = 16,
  //% block=joystick
  Joystick = 8,
}

/**
 * Controls the functions of the Yahboom Basic Game Handle
 */
//% color=#5197D5 weight=100 icon="\uf11b"
//% groups='["Buttons", "Joystick", "Outputs"]'
namespace yahboomGameHandle {
  let hasBeenInitialized = false;

  function init(): void {
    hasBeenInitialized = true;
    pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
  }

  /**
   * Returns true if the button is down
   * @param button the button to test
   */
  //% blockId="gameHandle_isButtonDown" block="is %button down"
  //% weight=1
  //% group="Buttons"
  export function isButtonDown(button: YahboomGameHandleButton): boolean {
    init();
    const pin = <DigitalPin><number>button;
    return pins.digitalReadPin(pin) === 0;
  }
}