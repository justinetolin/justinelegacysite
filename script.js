// !Navigation Menu and Header
let markerBTN = document.querySelector('.marker');
let headerEl = document.getElementById('header');
let headerElClass = headerEl.classList;
let menuEl = document.getElementById('menu');
let menuElClass = menuEl.classList;
let markerLabelEl = document.querySelector('.marker-label');

markerBTN.addEventListener('click', function () {
	if (!headerElClass.contains('take')) {
		headerEl.classList.remove('leave');
		headerEl.classList.add('take');
		markerBTN.classList.remove('blink');
		markerLabelEl.classList.remove('transition-down');
	} else {
		headerEl.classList.add('leave');
		headerEl.classList.remove('take');
		markerBTN.classList.add('blink');
		menuEl.classList.add('up');
		markerLabelEl.classList.add('transition-down');
	}

	setTimeout(function () {
		if (!menuElClass.contains('drop')) {
			menuEl.classList.remove('up');
			menuEl.classList.add('drop');
		} else {
			menuEl.classList.add('up');
			menuEl.classList.remove('drop');
		}
	}, 500);
});


// SIM PUK lagot
const passwordEl = document.getElementById('password');
const pukEl = document.getElementById('passwordEl');
const bootEl = document.getElementById('bootEl');

pukEl.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault();
		checkPuk();
	}
});

bootEl.addEventListener('click', () => {
	checkPuk();
});

passwordEl.classList.add('goingin')
setTimeout(()=>{
	passwordEl.classList.remove('goingin')
}, 1000)

function checkPuk() {
	if (pukEl.value.toLowerCase() === word.join('')) {
		boot();
		setTimeout(() => {
			passwordEl.style.display = 'none'
		}, 2000);
		pukEl.disabled = true;
		passwordEl.style.borderColor = "green"
		passwordEl.classList.add('correct-blink')
	} else {
		pukEl.value = "";
		passwordEl.classList.add('invalid')
		setTimeout(()=>{
			passwordEl.classList.remove('invalid')
		}, 1000)
	}
}



// ! Show, Hide Windows when activated
let winAppearDelay = 300;

const introEl = document.getElementById('intro'),
	portfolioEl = document.getElementById('portflio'),
	skillsEl = document.getElementById('skills'),
	aboutEl = document.getElementById('about'),
	contactEl = document.getElementById('contact'),
	moreEl = document.getElementById('more');

const introWin = document.getElementById('introWin'),
	profileWin = document.getElementById('profileWin'),
	portfolioWin = document.getElementById('portfolioWin'),
	projectsWin = document.getElementById('projectsWin'),
	skillsWin = document.getElementById('skillsWin'),
	experienceWin = document.getElementById('experienceWin'),
	aboutWin = document.getElementById('aboutWin'),
	contactWin = document.getElementById('contactWin'),
	locationWin = document.getElementById('locationWin'),
	moreWin = document.getElementById('moreWin');

const overlapEl = document.getElementById('overlapInput');


aboutEl.addEventListener('click', showAbout);

introEl.addEventListener('click', showIntro);

portfolioEl.addEventListener('click', showPortfolio);

skillsEl.addEventListener('click', showSkills);

contactEl.addEventListener('click', showContact);

moreEl.addEventListener('click', showMore);

let isProfileVisible = false;

function hideAll() {
	if (!overlapEl.checked) {
		introWin.classList.remove('visible');
		profileWin.classList.remove('visible');
		portfolioWin.classList.remove('visible');
		projectsWin.classList.remove('visible');
		skillsWin.classList.remove('visible');
		experienceWin.classList.remove('visible');
		aboutWin.classList.remove('visible');
		contactWin.classList.remove('visible');
		locationWin.classList.remove('visible');
	}
}

function showIntro() {
	hideAll();
	if (isProfileVisible) {
		profileWin.classList.add('visible');
	} else {
		setTimeout(() => {
			profileWin.classList.add('visible');
			isProfileVisible = true;
		}, winAppearDelay);
	}
	setTimeout(() => {
		introWin.classList.add('visible');
	}, winAppearDelay);
}

function showPortfolio() {
	hideAll();
	setTimeout(() => {
		portfolioWin.classList.add('visible');
		projectsWin.classList.add('visible');
	}, winAppearDelay);
	isProfileVisible = false;
}

function showSkills() {
	hideAll();
	setTimeout(() => {
		skillsWin.classList.add('visible');
		experienceWin.classList.add('visible');
		animateProgress('html', 95);
		animateProgress('css', 90);
		animateProgress('js', 5);
		animateProgress('py', 3);
	}, winAppearDelay);
	isProfileVisible = false;
}

function showAbout() {
	hideAll();
	if (isProfileVisible) {
		profileWin.classList.add('visible');
	} else {
		setTimeout(() => {
			profileWin.classList.add('visible');
			isProfileVisible = true;
		}, winAppearDelay);
	}
	setTimeout(() => {
		aboutWin.classList.add('visible');
	}, winAppearDelay);
}

function showContact() {
	hideAll();
	setTimeout(() => {
		contactWin.classList.add('visible');
		locationWin.classList.add('visible');
	}, winAppearDelay);
	isProfileVisible = false;
}

function showMore() {
	moreWin.classList.add('visible');
	isProfileVisible = false;
}


// EXPERIENCES PROGRESS BARS
function animateProgress(exp, lvl) {
	for (let i = 0; i <= lvl; i++) {
		setTimeout(() => {
			document.getElementById(exp + 'Bar').style.width = i + '%';
			document.getElementById(exp + 'Value').innerText = i + '%';
		}, i * 20);
	}

}


// Form kinesu
const submitBtn = document.getElementById('submitBtn');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formName = document.getElementById('name');
	const formEmail = document.getElementById('email');
	const formSubject = document.getElementById('subject');
	const formMessage = document.getElementById('message');

	if (formName.value.trim() !== "" && formEmail.value.trim() !== "" && formSubject.value.trim() !== "" && formMessage.value.trim() !== "") {
		submitBtn.innerText = `Thank you ${formName.value.toUpperCase()} for submitting the form!`;
		submitBtn.classList.remove('not-submitted');
		submitBtn.classList.add('submitted');
		contactForm.reset();

		setTimeout(() => {
			submitBtn.classList.remove('submitted');
			submitBtn.innerText = "Submit";
		}, 10000);
	} else {
		submitBtn.classList.add('not-submitted');
		submitBtn.classList.remove('submitted');
	}
});

// VERIFY if may laman ung input
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formSubject = document.getElementById('subject');
const formMessage = document.getElementById('message');

formName.addEventListener('input', checkFormValidity);
formEmail.addEventListener('input', checkFormValidity);
formSubject.addEventListener('input', checkFormValidity);
formMessage.addEventListener('input', checkFormValidity);

function checkFormValidity() {
	if (formName.value.trim() !== "" && formEmail.value.trim() !== "" && formSubject.value.trim() !== "" && formMessage.value.trim() !== "") {
		submitBtn.classList.remove('not-submitted');
	} else {
		submitBtn.classList.add('not-submitted');
	}
}



// !Code extrcted and modified para gumana ng tama dva from Person of Interest - Samaritan UI - Executive Section
let executive = {
	classes: [],
	init: () => {
		document.querySelectorAll('#executive .item').forEach((item) => {
			if (item.classList.length > 1) {
				executive.classes.push(item.classList[1]);
				item.classList.remove(item.classList[1]);
			}
		});
		executive.blink();
	},
	blink: () => {
		let f = (t) => {
			setTimeout(() => {
				let n = Math.floor(Math.random() * (executive.classes.length - 1)) + 0;
				try { document.querySelectorAll('#executive .item')[n].classList.add(executive.classes[n]); } catch (e) { return; }
				setTimeout(() => {
					try { document.querySelectorAll('#executive .item')[n].classList.remove(executive.classes[n]); } catch (e) { }
				}, 250);
				let t = Math.floor(Math.random() * 4000) + 100;
				f(t);
			}, t);
		};
		for (let i = 0; i < 2; i++) { f(0); }
	}
};



// ! Window Drag from W3schools
// ! https://www.w3schools.com/howto/howto_js_draggable.asp
// ! Modify lang ung code para pde multiple elements idrag
const elements = document.querySelectorAll('.winDrag');

// ! Magloop sa class array kasi pag id tulad ng sa orig is 1 lang pde macater. OK?
for (var i = 0; i < elements.length; i++) {
	makeDraggable(elements[i]);
}

function makeDraggable(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (elmnt.querySelector(".windrag-header")) {
		/* if present, the header is where you move the DIV from:*/
		elmnt.querySelector(".windrag-header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	elmnt.querySelector(".windrag-header").addEventListener('dblclick', () => {
		elmnt.classList.remove('visible');
	});

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		elmnt.style.opacity = "0.5";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
		elmnt.style.opacity = 1;
	}
}


// !LOADING
// !Inpired from Person of Interest
// !Code extrcted and modified para gumana ng tama dva from Person of Interest - Samaritan UI
function runWithProgress(callback) {
	const a = [
		'KERNEL',
		'OPERATING SYSTEM',
		'PROTOCOLS',
		'PROCESSING',
		'RECOGNITION',
		'MEMORY',
		'LEARNING',
		'HEURISTICS',
		'ENGINEERING'
	];
	const b = [
		'DOD',
		'FBI',
		'CIA',
		'NSA',
		'DEA',
		'ECHELON',
		'DGSI',
		'DGSE',
		'MI6',
		'DOH',
		'DOJ',
		'GCHQ',
		'FSB',
		'SVR',
		'CMSHS'
	];
	const n = parseInt(100 / (a.length + b.length));
	let i = 0;
	let p = 0;
	const progressInterval = setInterval(() => {
		if (p < 100) {
			p++;
			document.querySelector('#progress .bar').style.width = p + '%';
			if (p % n === 0) {
				if (i < (a.length + b.length)) {
					const currentText = a[i] ? 'INITIATING : ' + a[i] : 'ACQUIRING : ' + b[i - a.length];
					document.querySelector('#progress .details').textContent = currentText;
					console.log(currentText);
					i++;
				} else {
					document.querySelector('#progress .details').textContent = `v3.000b10_tlnz`;
				}
			}
		} else {
			clearInterval(progressInterval);
			setTimeout(() => {
				document.querySelector('#progress').style.display = 'none';
				setTimeout(() => {
					callback();
				}, 75);
			}, 500);
		}
	}, 25);
}

function setStatus(text, callback) {
	const statusElement = document.querySelector('#status');
	statusElement.textContent = text;
	statusElement.style.opacity = '1';
	setTimeout(() => {
		statusElement.style.opacity = '0';
		setTimeout(() => {
			callback();
		}, 500);
	}, 1000);
}

function loadWithMarker(callback) {
	marker.dots();
	document.querySelectorAll('.LW').forEach((el) => {
		el.classList.add('loaded');
	});
	setTimeout(() => {
		callback();
	}, 2000);
}

function scrollGUIinvisible() {
	const scrollGUIr = document.getElementById('scrollGUIr');
	const scrollGUIl = document.getElementById('scrollGUIl');
	scrollGUIr.classList.remove('invisible');
	scrollGUIl.classList.remove('invisible');
}

function load() {
	document.querySelectorAll('.LW').forEach((el) => {
		el.classList.add('loaded');
		setTimeout(()=>{
		}, 500)
	});
}

function boot() {
	showIntro()
	runWithProgress(() => {
		setStatus('Connection Stablished', () => {
			// showIntro();
			setInterval(() => {
				scrollGUIinvisible();
				executive.init();
			}, 600);
			load();
		});
	});
	let bootAudio = new Audio('assets/samaritan_boot.mp3')
	bootAudio.volume = 0.2;
	bootAudio.play()
}