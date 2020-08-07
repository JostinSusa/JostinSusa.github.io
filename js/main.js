(function(){
	var front = document.getElementById('front'),
	back = document.getElementById('back'),
	version = document.getElementById('version'),
	diseno = document.getElementById('diseno');

var hFront = document.getElementById('hFront'),
	hBack = document.getElementById('hBack'),
	hVersion = document.getElementById('hVersion'),
	hDiseno = document.getElementById('hDiseno');

	(function (){
		if (hFront.classList == 'active'){
			front.style.display = 'flex';
			back.style.display = '';
			version.style.display = '';
			diseno.style.display = '';
		}
	}());

	hFront.addEventListener('click', function(){
		hFront.className = 'active';
		hBack.className = '';
		hVersion.className = '';
		hDiseno.className = '';
		if (hFront.classList == 'active'){
			front.style.display = 'flex';
			back.style.display = '';
			version.style.display = '';
			diseno.style.display = '';
		}
	});
	hBack.addEventListener('click', function(){
		hFront.className = '';
		hBack.className = 'active';
		hVersion.className = '';
		hDiseno.className = '';
		if (hBack.classList == 'active'){
			front.style.display = '';
			back.style.display = 'flex';
			version.style.display = '';
			diseno.style.display = '';
		}
	});
	hVersion.addEventListener('click', function(){
		hFront.className = '';
		hBack.className = '';
		hVersion.className = 'active';
		hDiseno.className = '';
		if (hVersion.classList == 'active'){
			front.style.display = '';
			back.style.display = '';
			version.style.display = 'flex';
			diseno.style.display = '';
		}
	});
	hDiseno.addEventListener('click', function(){
		hFront.className = '';
		hBack.className = '';
		hVersion.className = '';
		hDiseno.className = 'active';
		if (hDiseno.classList == 'active'){
			front.style.display = '';
			back.style.display = '';
			version.style.display = '';
			diseno.style.display = 'flex';
		}
	});
}());
