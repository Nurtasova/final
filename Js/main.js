var users = 0;
for (i = 1; i > 0; i++) {
	if (localStorage.getItem(i).length > 0) {
		users = i;
	} else break;
}

function Signup() {

	var result = true;
	var a = document.forms.Signup.email.value,
		b = document.forms.Signup.username.value,
		c = document.forms.Signup.password.value,
		d = document.forms.Signup.repassword.value;


	var emails = /^\w+@[a-zA-Z_Z0-9]+?\.[a-zA-Z]{2,3}$/;
	var usernames = /^[a-zA-Z0-9_-]+$/;

	if (a == "" || emails.test(a) == false) {
		document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
		result = false;
	}


	if (b == "" || usernames.test(b) == false) {
		document.getElementById("username_message").innerHTML = "Please enter the correct information";
		result = false;
	}
	if (c == "") {
		document.getElementById("password_message").innerHTML = "Please enter the correct password";
		result = false;
	}

	if (c !== d || d == "") {
		document.getElementById("repassword_message").innerHTML = "Please enter the correct password";
		result = false;
	}
	if (result == true) {
		users++;
		var user = {
			Email: a,
			Name: b,
			Password: c,
			enable: true
		};
		localStorage.setItem(users, JSON.stringify(user));
		alert("Account Created.\n\nSign In using the link below.");
		document.getElementById("loggeda").style = "display: none";
		document.getElementById("logout").innerHTML = "Log out " + JSON.parse(localStorage.getItem(users)).Name;
		document.getElementById("logoutbut").style = "display: flex";
		document.getElementById("email_message").innerHTML = "";
		document.getElementById("repassword_message").innerHTML = "";
		document.getElementById("password_message").innerHTML = "";
		document.getElementById("username_message").innerHTML = "";
		document.getElementById("sign_in_inf").innerHTML = "You are logged";
		document.getElementById("sign_in_inf").style = "color: green";
	}
}


function LogIn() {
	var emaillog = document.getElementById("login_emial").value;
	var pass = document.getElementById("login_password").value;
	for (i = 1; i > 0; i++) {
		if (localStorage.getItem(i).length > 0) {
			if (emaillog == JSON.parse(localStorage.getItem(i)).Email && pass == JSON.parse(localStorage.getItem(i)).Password) {
				if (JSON.parse(localStorage.getItem(i)).enable == true) {
					open("../1/admin.html")
					document.getElementById("logged").innerHTML = ""
					document.getElementById("incorrect").innerHTML = "You are logged";
					document.getElementById("incorrect").style = "color: green";
					document.getElementById("loggeda").style = "display: none";
					document.getElementById("logout").innerHTML = "Log out " + JSON.parse(localStorage.getItem(i)).Name;
					document.getElementById("logoutbut").style = "display: flex";
					break;
				} else {
					document.getElementById("incorrect").innerHTML = "You are not allowed to login";
				}
			} else {
				document.getElementById("incorrect").innerHTML = "Login or password are not correct";
			}
		} else break;
	}
}