export const EXPECTED_MINUTES_IN_OVEN = 40

export function remainingMinutesInOven(time){
  return EXPECTED_MINUTES_IN_OVEN - time
}
export function preparationTimeInMinutes(layers) {
  return layers*2
}
export function totalTimeInMinutes(layers, time) {
  return preparationTimeInMinutes(layers) + time
}