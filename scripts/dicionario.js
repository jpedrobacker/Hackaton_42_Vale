const glossaryItems = document.querySelectorAll('.main__dicionario-item');
const modals = document.querySelectorAll('.modal');

glossaryItems.forEach(item => {
	item.addEventListener('click', () => {
		const modalId = item.getAttribute('data-modal');
		document.getElementById(modalId).style.display = 'flex';
	});
});

modals.forEach(modal => {
	const closeBtn = modal.querySelector('.modal__close');
	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none';
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.style.display = 'none';
		}
	});
});
