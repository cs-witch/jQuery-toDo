// selct the title input field
//var titleFld = document.querySelector("#title");
var titleFld = $('#title');

// select add button

var addBtn = $("#addBtn");
//select todo list
var todos = $('#todos')

addBtn.click(addTodo);

// add todo
function addTodo() {
	// console.log("addded");
	var title = titleFld.val();
	//console.log(title);
	var note = $("<li>").append(title);
	console.log(note);
}

/*
function checkInput(y) {
	if (typeof y === "number") {
		console.log("I'm a number");
	}
	else if (typeof y === "string") {
		console.log("I'm a string");	
	} else {
		console.log("-1");
	}
}

checkInput("10");

*/