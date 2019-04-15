let time = 0
let slider
let lastVal = 1
let n = 1
let radius = 50

let wave = []
let path = []

function setup() {
	createCanvas(800, 600);
	slider = createSlider(1, 50, 1)
}

function draw() {
	background(0);
	translate(width/4, height/2)

	let x = 0
	let y = 0

	for (let i = 0; i < slider.value(); i++) {
		let prevX = x
		let prevY = y

		// * square wave *
		let n = i * 2 + 1
		let radius = 50 * (4 / (n * PI))
		// * square wave *

		// * saw tooth *
		// let n = i + 1
		// let radius = 200 * (1 / (n * PI)) 
		// * saw tooth *

		// TODO: Fix Equation for triangle wave
		// * triangle wave *
		// let n = i * 2 + 1
		// let radius = 10 * ((8 / (PI * PI)) * (((-1)^((n-1)/2))/n^2)) 
		// * square wave *

		x += radius * cos(n * time)
		y += radius * sin(n * time)

		stroke(255, 100)
		noFill()
		ellipse(prevX, prevY, radius * 2)

		fill(255)
		stroke(255)
		line(prevX, prevY, x, y)
	}
	path.unshift([x, y])
	wave.unshift(y)

	translate(width/4, 0)
	line(0, -height/2, 0, height/2)
	stroke(200, 0, 0)
	line(0, wave[0], x - width/4, wave[0])

	stroke(255)
	beginShape()
	noFill()
	for (let i = 0; i < wave.length; i++) {
		vertex(i, wave[i])
	}
	endShape()

	translate(-width/4, 0)
	stroke(255, 50)
	beginShape()
	noFill()
	for (let i = 0; i < path.length; i++) {
		vertex(path[i][0], path[i][1])
	}
	endShape()

	if (lastVal !== slider.value()) {
		path = []

		lastVal = slider.value()
	}

	time -= 0.05
	if (wave.length > width/2) wave.pop()
}