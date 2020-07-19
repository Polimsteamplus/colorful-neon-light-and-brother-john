input.onButtonPressed(Button.A, function () {
    music.setTempo(120)
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Double))
    }
})
led.enable(false)
pins.analogWritePin(AnalogPin.P2, 1023)
pins.analogWritePin(AnalogPin.P1, 1023)
pins.analogWritePin(AnalogPin.P0, 1023)
basic.forever(function () {
    basic.showString("Hello, Reon!")
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P2, 1023)
    for (let index = 0; index < 1; index++) {
        for (let Val = 0; Val <= 513; Val++) {
            pins.analogWritePin(AnalogPin.P0, Val)
            pins.analogWritePin(AnalogPin.P1, 1023 - Val)
            pins.analogWritePin(AnalogPin.P2, 512 - Val)
            basic.pause(1)
        }
        for (let Val = 0; Val <= 513; Val++) {
            pins.analogWritePin(AnalogPin.P0, 512 - Val)
            pins.analogWritePin(AnalogPin.P1, 1023 - Val)
            pins.analogWritePin(AnalogPin.P2, Val)
            basic.pause(1)
        }
    }
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P0, 1023)
})
