/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program return percentage of light.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let lightValue: number
let lightValuePercentage: number

input.onButtonPressed(Button.A, function() {
  // input
  lightValue = input.lightLevel() 

  // process
  lightValuePercentage = (lightValue / 255) * 100
  lightValuePercentage = Math.round(lightValuePercentage)

  // output
  basic.clearScreen()
  basic.showString('Percentage light is: ' + lightValuePercentage.toString() + '%.')
})