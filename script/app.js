(() => {
	// put variables (connections to the web page / DOM)at the top
	// constant -> something that wil never change / can't be redefined
	// let -> flexible
	// ("") -> css #buttonHolder img {} same
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones= document.querySelectorAll(".drop-zone");

	// functions go in the middle (function= hey find this method)
	// this function runs when the bottom nav buttons are clicked
	// it changes the bg image of the drop zone div using the sytle property

	function dragStart(event) {
		console.log('started draggin');
		// take the dragged image and move it into the drag zones
		// move it from the left container to the drop zone(reparent it)
		event.dataTransfer.setData("savedID", this.id);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragged over me');

		// allow an element to be dragged over and them dropped
	}

	function dropped(event) {
		// override the browser / element's default behaviour, and do what I say!!
		event.preventDefault();

		//check to see if there's an element here already(a dropped image)
		//if so, then kill this functions
		if (this.childElementCount > 0) { return; } //Like an exit keyword - dont't ecxecute anything past this

		let targetID = event.dataTransfer.getData("savedID");
		console.log("i dragged this image:", targetID);
		// put the dragged image into this container
		// create a new img tag, set it source, and THEN append it
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}

		// this function runs when the bottm nav buttons are clicked 
	function changeBGImage() {
		// get the custiom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// `` is not a quote. it is a Javascript templete string / add style tag !!
		//dropZoneContainer.style.backgroundColor = `blue`;
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;

	}
// same == dropZoneContainer.style.backgroundImage = `url(images/backGround${ this.dataset.imageref}.jpg)`;

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));
	dragImages.forEach(piece => piece.addEventListener('dragstart', dragStart));

	dropZones.forEach (zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

	// emulate a click on the first bottom buttom and run the bg image function
	changeBGImage.call(puzzleSelectors[0]);
})();
