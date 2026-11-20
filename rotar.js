const image = document.querySelector("#rotating-image");
let rotation = 0;
let previousTime;

function rotateImage(time) {
	if (previousTime !== undefined) {
		rotation = (rotation + (time - previousTime) * 0.06) % 360;
		image.style.transform = `rotate(${rotation}deg)`;
	}

	previousTime = time;
	requestAnimationFrame(rotateImage);
}

requestAnimationFrame(rotateImage);
