let x = 0
let y = 0
basic.forever(function () {
    led.plot(x, 0)
    led.unplot(x - 1, 0)
    basic.pause(1000)
    x = x + 1
    if (x == 5) {
        led.unplot(4, 0)
        x = 0
    }
})
