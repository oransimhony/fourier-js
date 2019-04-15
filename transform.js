let time = 0
let lastVal = 1
let n = 1
let radius = 50

let x = []
let y = []
let fourierY;
let fourierX;

let points = [{ "x": 190, "y": 116 }, { "x": 190, "y": 116 }, { "x": 190, "y": 116 }, { "x": 188, "y": 120 }, { "x": 183, "y": 126 }, { "x": 181, "y": 130 }, { "x": 178, "y": 134 }, { "x": 175, "y": 136 }, { "x": 174, "y": 139 }, { "x": 172, "y": 140 }, { "x": 170, "y": 143 }, { "x": 167, "y": 148 }, { "x": 163, "y": 152 }, { "x": 160, "y": 156 }, { "x": 157, "y": 160 }, { "x": 154, "y": 163 }, { "x": 151, "y": 165 }, { "x": 150, "y": 166 }, { "x": 149, "y": 168 }, { "x": 147, "y": 169 }, { "x": 146, "y": 170 }, { "x": 144, "y": 171 }, { "x": 143, "y": 171 }, { "x": 143, "y": 171 }, { "x": 143, "y": 171 }, { "x": 143, "y": 171 }, { "x": 143, "y": 171 }, { "x": 143, "y": 171 }, { "x": 142, "y": 171 }, { "x": 142, "y": 171 }, { "x": 142, "y": 171 }, { "x": 142, "y": 171 }, { "x": 143, "y": 171 }, { "x": 145, "y": 171 }, { "x": 149, "y": 171 }, { "x": 152, "y": 170 }, { "x": 156, "y": 170 }, { "x": 161, "y": 169 }, { "x": 166, "y": 169 }, { "x": 170, "y": 167 }, { "x": 172, "y": 166 }, { "x": 176, "y": 165 }, { "x": 179, "y": 165 }, { "x": 181, "y": 165 }, { "x": 184, "y": 165 }, { "x": 185, "y": 165 }, { "x": 186, "y": 165 }, { "x": 187, "y": 165 }, { "x": 189, "y": 165 }, { "x": 190, "y": 165 }, { "x": 192, "y": 165 }, { "x": 193, "y": 165 }, { "x": 193, "y": 165 }, { "x": 193, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 194, "y": 165 }, { "x": 192, "y": 167 }, { "x": 189, "y": 170 }, { "x": 186, "y": 174 }, { "x": 183, "y": 178 }, { "x": 180, "y": 182 }, { "x": 177, "y": 185 }, { "x": 174, "y": 189 }, { "x": 173, "y": 192 }, { "x": 171, "y": 194 }, { "x": 169, "y": 198 }, { "x": 166, "y": 202 }, { "x": 165, "y": 203 }, { "x": 165, "y": 205 }, { "x": 163, "y": 206 }, { "x": 162, "y": 209 }, { "x": 162, "y": 210 }, { "x": 161, "y": 211 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }, { "x": 161, "y": 212 }]

let path = []

function dft(x) {
	let X = []
	const N = x.length
	let re = 0
	let im = 0

	for (let k = 0; k < N; k++) {
		for (let n = 0; n < N; n++) {
			let phi = (TWO_PI * k * n) / N
			re += x[n] * cos(phi)
			im -= x[n] * sin(phi)
		}
		re = re / N
		im = im / N
		let freq = k
		let amp = sqrt(re * re + im * im)
		let phase = atan2(im, re)
		X[k] = { re, im, freq, amp, phase }
	}
	return X
}

function epiCycles(x, y, rotation, fourier) {
	for (let i = 0; i < fourier.length; i++) {
		let prevx = x
		let prevy = y

		let freq = fourier[i].freq
		let radius = fourier[i].amp
		let phase = fourier[i].phase

		x += radius * cos(freq * time + phase + rotation)
		y += radius * sin(freq * time + phase + rotation)

		stroke(255 / n, 255, 255, 100)
		noFill()
		ellipse(prevx, prevy, radius * 2)

		fill(255)
		stroke(255)
		line(prevx, prevy, x, y)
	}
	return createVector(x, y)
}

function setup() {
	createCanvas(800, 600);
	for (let i = 0; i < points.length; i++) {
		x[i] = points[i].x
		y[i] = points[i].y
	}
	fourierY = dft(y);
	fourierX = dft(x);

	fourierX.sort((a, b) => b.amp - a.amp)
	fourierY.sort((a, b) => b.amp - a.amp)
}

function draw() {
	background(0);

	let vx = epiCycles(width / 2, 100, 0, fourierX)
	let vy = epiCycles(100, height / 2, HALF_PI, fourierY)

	let v = createVector(vx.x, vy.y)
	path.unshift(v)

	if (points.length > 0) {
		stroke(255, 0, 0, 100)
		line(vx.x, vx.y, v.x, v.y)
		line(vy.x, vy.y, v.x, v.y)
		stroke(255)
	}

	beginShape()
	noFill()
	for (let i = 0; i < path.length; i++) {
		vertex(path[i].x, path[i].y)
	}
	endShape()

	const dt = TWO_PI / fourierY.length
	time += dt
	if (time > TWO_PI) {
		time = 0
		path = []
	}
}