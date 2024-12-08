const username = document.getElementById("username");
const password = document.getElementById("password");
const dicitem1 = document.getElementById("item1");

function checkLogin()
{
	if (username.value === "carlos" && password.value === "1234")
		window.location.href = "dashboard_carlos.html";
	else if (username.value === "luisa" && password.value === "1234")
		window.location.href = "dashboard_luisa.html";
	else
		document.getElementById("error-message").style.color = 'red';
}
