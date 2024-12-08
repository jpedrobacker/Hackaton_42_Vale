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
