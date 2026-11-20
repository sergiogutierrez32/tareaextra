const image = document.querySelector("#moving-image");
const container = image.parentElement;
let position = 0;
let direction = 1;
let previousTime;
const speed = 180;

function moveImage(time) {
	if (previousTime !== undefined) {
		const maxPosition = Math.max(0, container.clientWidth - image.offsetWidth);
		position += direction * speed * (time - previousTime) / 1000;

		if (position >= maxPosition) {
			position = maxPosition;
			direction = -1;
		} else if (position <= 0) {
			position = 0;
			direction = 1;
		}

		image.style.transform = `translateX(${position - maxPosition / 2}px)`;
	}

	previousTime = time;
	requestAnimationFrame(moveImage);
}

requestAnimationFrame(moveImage);
