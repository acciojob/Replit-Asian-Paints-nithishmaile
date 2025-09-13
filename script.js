//your JS code here. If required.//your JS code here. If required.
const formElement=document.getElementById("color-box");
let allBoxes=document.querySelectorAll(".grid-item");
let resetButton=document.getElementById("reset_button");

formElement.addEventListener("submit",(event)=>{
	event.preventDefault();
	resetTheColor()
	const boxId=event.target[0].value;
	const color=event.target[1].value;
	const selectedBox=document.getElementById(boxId);
	selectedBox.style.backgroundColor=color;
	event.target.reset();
})

resetButton.addEventListener("click",resetTheColor);

function resetTheColor(){
	for(let box of allBoxes){
		box.style.backgroundColor="transparent";
	}
}

