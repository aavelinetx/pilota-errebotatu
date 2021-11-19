let pilota = game.createSprite(4, 2)
let pausa = 500
basic.forever(function () {
    pilota.move(-1)
    basic.pause(pausa)
    pilota.ifOnEdgeBounce()
})
