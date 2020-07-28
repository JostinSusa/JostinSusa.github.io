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
//********************************** Funcion del slider de Proyectos****************************************
(function(){
	var itemShow = document.getElementById('itemShow'),
		slide = document.getElementById('slide'),
		btnPrev = document.getElementById('btnPrev'),
		btnNext = document.getElementById('btnNext'),
		itemOne = document.getElementById('itemOne'),
		itemTwo = document.getElementById('itemTwo'),
		itemThree = document.getElementById('itemThree');

	var list = [itemOne, itemTwo, itemThree];

	var count = 0;
	
	list[count].style.display = 'flex';

	function resetCount(){
		if(count < 0){
			count = 2;
		}else if(count > 2){
			count = 0;
		}
	}

	btnPrev.addEventListener('click',function(){
		list[count].style.marginLeft = '-150%';
		setTimeout(function(){
			list[count].style.display = 'none';
			list[count].style.margin = '0';
			count = count - 1;
			resetCount();
			list[count].style.display = 'flex';
		},300);		
		
	});
	btnNext.addEventListener('click',function(){
		list[count].style.marginRight = '-150%';
		setTimeout(function(){
			list[count].style.display = 'none';
			list[count].style.margin = '0';
			count = count + 1;
			resetCount();
			list[count].style.display = 'flex';
		},300);
	});
}());

