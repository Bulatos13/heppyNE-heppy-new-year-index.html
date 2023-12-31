//MARKING

const availableWidth = document.documentElement.clientWidth;
const availableHeight = document.documentElement.clientHeight;

let scull = document.getElementById('scull');
	//scull.style.width = 

let wrapper = document.getElementById('wrapper');
	//wrapper.style.height = availableHeight + `px`;


let box = document.getElementsByClassName('box');

let lid = document.getElementsByClassName('lid');

let black = document.getElementById('black');

//HIDDEN BLOCK

let hiddenBlocks = document.getElementsByClassName('hidden-block');

function doVisible(){
	if( lid.length == 0 ){
		hiddenBlocks[0].style.opacity = 1;
		hiddenBlocks[1].style.opacity = 1;
		hiddenBlocks[2].style.opacity = 1;
	}
}

//ANIMATION

function animation(e){
	if( typeof(e) === typeof(box[0])){
		e.style.top = -150 + `px`;
		e.style.transform = `rotate(35deg)`;

		function breakDown(){
			e.style.top = 500 + `px`;
		}
		setTimeout(breakDown, 1000);

		function del(){
			e.remove();
			setTimeout(doVisible, 300);
		}
		setTimeout(del, 1200);
	}
}



box[0].addEventListener('click', () => { animation(box[0].children[1]) } );
box[1].addEventListener('click', () => { animation(box[1].children[1]) } );
box[2].addEventListener('click', () => { animation(box[2].children[1]) } );
box[3].addEventListener('click', () => { animation(box[3].children[1]) } );

//BLACK BACKGROUND

let present = document.getElementById('present');

let body = document.getElementsByTagName('body');
let bodyChildren = document.body.children;

present.addEventListener('click', () => {
	for( let i = 0; i <= bodyChildren.length; i++ ){
		bodyChildren[i].remove();
		body[0].style.backgroundColor = 'black';
	}
})