const item1 = document.querySelectorAll('.main__course-content1');
const item2 = document.querySelectorAll('.main__course-content2');
const item3 = document.querySelectorAll('.main__course-content3');

function openCoursePage1() {
	console.log('openCoursePage1');
	item1.forEach(item => {
		item.style.display = 'block';
		item2.forEach(item => {
			item.style.display = 'none';
			item3.forEach(item => {
				item.style.display = 'none';
			});
		});
	});
}

function openCoursePage2() {
	console.log('openCoursePage2');
	item2.forEach(item => {
		item.style.display = 'block';
		item1.forEach(item => {
			item.style.display = 'none';
			item3.forEach(item => {
				item.style.display = 'none';
			});
		});
	});
}

function openCoursePage3() {
	console.log('openCoursePage3');
	item3.forEach(item => {
		item.style.display = 'block';
		item1.forEach(item => {
			item.style.display = 'none';
			item2.forEach(item => {
				item.style.display = 'none';
			});
		});
	});
}

/*botao audio*/

function toggleAudio() {
    const audio = document.getElementById('audio');

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


// function playAudio() {
//     const audio = document.getElementById('audio');
//     audio.play();
// }


/*Luisa*/

document.getElementById("submit-button").addEventListener("click", function () {
	const selectedOption = document.querySelector('input[name="question0"]:checked');
	const modal = document.getElementById("modal");
	const modalMessage = document.getElementById("modal-message");
	const closeButton = document.querySelector(".close-button");
  
	if (!selectedOption) {
	  alert("Por favor, selecione uma opção.");
	  return;
	}
  
	if (selectedOption.value === "A" || selectedOption.value === "B" || selectedOption.value === "C") {
	  modalMessage.textContent = `Justificativa: A opção A é a correta, 
	  pois sempre que houver dúvida sobre a autenticidade de um e-mail, 
	  especialmente um que solicite ações sensíveis como redefinição de senha, 
	  o colaborador deve validar a informação diretamente com o setor responsável. 
	  Isso evita que credenciais sejam roubadas.`;
	  modal.classList.add("show");
	  document.body.classList.add("modal-active");
	}
  
	closeButton.addEventListener("click", function () {
	  modal.classList.remove("show");
	  document.body.classList.remove("modal-active");
	});
  
	window.addEventListener("click", function (event) {
	  if (event.target === modal) {
		modal.classList.remove("show");
		document.body.classList.remove("modal-active");
	  }
	});
  });
  
  document.getElementById("submit-button2").addEventListener("click", function () {
	const selectedOption = document.querySelector('input[name="luisa1"]:checked');
	const modal = document.getElementById("modalluisa");
	const modalMessage = document.getElementById("modalCID-message");
	const closeButton = document.querySelector(".closeCID-button");
  
	if (!selectedOption) {
	  alert("Por favor, selecione uma opção.");
	  return;
	}
  
	if (selectedOption.value === "A" || selectedOption.value === "B" || selectedOption.value === "C") {
	  modalMessage.textContent = `Justificativa: A opção A é a correta, pois ao proibir o 
	  uso de pen drives pessoais e exigir soluções corporativas seguras para armazenar 
	  dados sensíveis, a empresa garante maior controle e proteção sobre os dados.
	Essas medidas reduzem o risco de vazamento de informações por dispositivos 
	não autorizados ou inseguros.`;
	  modal.classList.add("show");
	  document.body.classList.add("modal-active");
	}
  
	closeButton.addEventListener("click", function () {
	  modal.classList.remove("show");
	  document.body.classList.remove("modal-active");
	});
  
	window.addEventListener("click", function (event) {
	  if (event.target === modal) {
		modal.classList.remove("show");
		document.body.classList.remove("modal-active");
	  }
	});
  });