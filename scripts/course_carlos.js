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

/*Carlos*/

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
	  modalMessage.textContent = `Justificativa: A opção A é a correta, pois, após o incidente, 
      é crucial que a empresa fortaleça seus processos de segurança para evitar futuras fraudes. 
      Implementar verificações rigorosas, como confirmações por múltiplos canais, pode impedir 
      que ataques de engenharia social se repitam, aumentando a segurança nas retiradas de mercadorias.`;
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
	  modalMessage.textContent = `Justificativa: A opção A é a correta, pois, sempre que houver 
      dúvida sobre uma solicitação urgente, é essencial confirmar a autenticidade da informação 
      com fontes confiáveis. Luiz poderia, por exemplo, ligar diretamente para o gerente de 
      logística ou solicitar um código de verificação para garantir que a transportadora estava 
      autorizada a retirar a carga.`;
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