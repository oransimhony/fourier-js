points = []

function setup() {
	createCanvas(400, 400);
}

function include(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == val) {
			return true;
		}
	}
	return false;
}

function draw() {
	background(0);
	stroke(255)
	for (let i = 0; i < points.length; i++) {
		point(points[i].x, points[i].y)
	}
	if (mouseIsPressed) {
		newPoint = {
			x: mouseX,
			y: mouseY
		}
		if (!include(points, newPoint))
			points.push(newPoint)
	}
}

function keyPressed() {
	console.log("points = " + JSON.stringify(points))
}