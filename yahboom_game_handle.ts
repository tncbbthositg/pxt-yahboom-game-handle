enum YahboomGameHandleButton {
  //% block=red
  Red = "DigitalPin.P13",
  //% block=green
  Green = "DigitalPin.P14",
  //% block=yellow
  Yellow = "DigitalPin.P15",
  //% block=blue
  Blue = "DigitalPin.P16",
  //% block=joystick
  Joystick = "DigitalPin.P8",
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
  export function isButtonDown(button: YahboomGameHandleButton): boolean {
    return pins.digitalReadPin(button) === 1;
  }
}