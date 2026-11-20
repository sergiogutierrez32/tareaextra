(function () {
	const image = document.querySelector("#moving-image");
let rotation = 0;
let previousTime;

function rotateImage(time) {
	if (previousTime !== undefined) {
		rotation = (rotation + (time - previousTime) * 0.06) % 360;
		image.style.rotate = `${rotation}deg`;
	}

	previousTime = time;
	requestAnimationFrame(rotateImage);
}

requestAnimationFrame(rotateImage);
})();
