/**
 * Yahboom Basic Game Handle buttons
 */
enum YahboomGameHandleButton {
  //% block=red
  Red = DigitalPin.P13,
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
  /**
   * Returns true if the button is down
   * @param button the button to test
   */
  //% blockId="gameHandle_isButtonDown" block="is %button down"
  //% weight=1
  //% group="Buttons"
  export function isButtonDown(button: YahboomGameHandleButton): boolean {
    return pins.digitalReadPin(DigitalPin.P13) === 1;
  }
}