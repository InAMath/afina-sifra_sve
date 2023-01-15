input.onButtonPressed(Button.A, function () {
    a = dobara[brojaca]
    ainv = ainverz[brojaca]
    basic.showNumber(a)
    brojaca = (brojaca + 1) % 12
})
function sifriraj () {
    sifra = (a * poruka + b) % 26
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (abeceda[brojacporuka]))
    poruka = brojacporuka
    brojacporuka = (brojacporuka + 1) % 26
})
input.onButtonPressed(Button.B, function () {
    b = brojacb
    basic.showNumber(b)
    brojacb = (brojacb + 1) % 26
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("P: ")
    basic.showString("" + (abeceda[poruka]))
    basic.pause(500)
    basic.showString("S: ")
    sifriraj()
    basic.showString("" + (abeceda[sifra]))
    basic.pause(500)
    basic.showString("P: ")
    desifriraj()
    basic.showString("" + (abeceda[desifrat]))
})
function desifriraj () {
    des = ainv * (sifra - b) % 26
    while (des < 0) {
        des = des + 26
    }
    desifrat = des
}
let des = 0
let desifrat = 0
let b = 0
let poruka = 0
let sifra = 0
let ainv = 0
let a = 0
let brojacporuka = 0
let brojacb = 0
let brojaca = 0
let ainverz: number[] = []
let dobara: number[] = []
let abeceda: string[] = []
abeceda = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
dobara = [
1,
3,
5,
7,
9,
11,
15,
17,
19,
21,
23,
25
]
ainverz = [
1,
9,
21,
15,
3,
19,
7,
23,
11,
5,
17,
25
]
brojaca = 0
brojacb = 0
brojacporuka = 0
