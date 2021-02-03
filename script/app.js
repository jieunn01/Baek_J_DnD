(() => {
	// put variables (connections to the web page / DOM)at the top
	// constant -> something that wil never change / can't be redefined
	// let -> flexible
	// ("") -> css #buttonHolder img {} same
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board");

	// functions go in the middle (function= hey find this method)
	// this function runs when the bottom nav buttons are clicked
	// it changes the bg image of the drop zone div using the sytle property
	function changeBGImage() {
		// get the custiom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// `` is not a quote. it is a Javascript templete string / add style tag !!
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;
		debugger;
	}
// same == dropZoneContainer.style.backgroundImage = `url(images/backGround${ this.dataset.imageref}.jpg)`;

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	// emulate a click on the first bottom buttom and run the bg image function
	changeBGImage.call(puzzleSelectors[0]);
})();
