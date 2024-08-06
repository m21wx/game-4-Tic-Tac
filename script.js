	
	let gameTic = document.querySelector('.gameTic');
	let gameBox = document.querySelectorAll('.box');
	let p = document.querySelector('.box-game p');
	p.innerHTML=` <span> x o</span> `;
	let index=0;
	gameBox.forEach(e=>{
		console.log( )
		e.addEventListener('click' ,()=>{
			if(e.innerHTML ==false){
						if(index == 0  ){
				e.innerHTML = 'x';
				p.innerHTML=` <span> o</span> `;

				
			}else if(index == 1  ){
				e.innerHTML = 'o';
				p.innerHTML=` <span> x</span> `;
				
			}
			indexBox()
				checkGame()
			}
			
	

	
	
		})
	
	})
	
	
	
		function indexBox(){
			if(index ==0){
				index = 1
			}else{
				index = 0
			}
		}

		function checkGame(){
		
			if( gameBox[0].textContent === gameBox[1].textContent && gameBox[1].textContent === gameBox[2].textContent && gameBox[2].textContent!=false){
				gameBox[0].style.background='green';
				gameBox[1].style.background='green';
				gameBox[2].style.background='green';
				abdet()
		
			}
			else if(gameBox[3].textContent === gameBox[4].textContent &&gameBox[4].textContent === gameBox[5].textContent  && gameBox[5].textContent!=false){
				gameBox[3].style.background='green';
				gameBox[4].style.background='green';
				gameBox[5].style.background='green';
				abdet()
			}
			else if(gameBox[6].textContent === gameBox[7].textContent && gameBox[7].textContent === gameBox[8].textContent  && gameBox[8].textContent!=false){
				gameBox[6].style.background='green';
				gameBox[7].style.background='green';
				gameBox[8].style.background='green';
				abdet()
			}
			//=============
			else if(gameBox[0].textContent === gameBox[3].textContent && gameBox[3].textContent === gameBox[6].textContent  && gameBox[6].textContent!=false){
				gameBox[0].style.background='green';
				gameBox[3].style.background='green';
				gameBox[6].style.background='green';
				abdet()
				
				}
			else if(gameBox[1].textContent === gameBox[4].textContent &&gameBox[4].textContent === gameBox[7].textContent  && gameBox[7].textContent!=false){
				gameBox[1].style.background='green';
				gameBox[4].style.background='green';
				gameBox[7].style.background='green';
				abdet()
			}
			else if(gameBox[2].textContent === gameBox[5].textContent &&gameBox[5].textContent === gameBox[8].textContent  && gameBox[8].textContent!=false){
				gameBox[2].style.background='green';
				gameBox[5].style.background='green';
				gameBox[8].style.background='green';
				abdet()
			}
			// =============
			else if(gameBox[0].textContent === gameBox[4].textContent &&gameBox[4].textContent === gameBox[8].textContent  && gameBox[8].textContent!=false){
				gameBox[0].style.background='green';
				gameBox[4].style.background='green';
				gameBox[8].style.background='green';
				abdet()
			}
			else if(gameBox[2].textContent === gameBox[4].textContent &&gameBox[4].textContent === gameBox[6].textContent  && gameBox[6].textContent!=false){
				gameBox[2].style.background='green';
				gameBox[4].style.background='green';
				gameBox[6].style.background='green';
				abdet()
			}
		}
		
		
		
		
		
		
		function abdet(){
			p.innerHTML=` <span>...الفائز</span> `;
			setTimeout(()=>{
				window.location.reload();
			},3000)
		}
		
		
		