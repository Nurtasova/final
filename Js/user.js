function UsersView() {
	for(i = 1; i > 0; i++) {
		if(localStorage.getItem(i).length > 0) {
			var table = document.getElementById("table");
			var row = table.insertRow(i);
			var col1 = row.insertCell(0);
			var col2 = row.insertCell(1);
			var col3 = row.insertCell(2);
			var col4 = row.insertCell(3);
			var col5 = row.insertCell(4);
			col1.innerHTML = i;
			col2.innerHTML = JSON.parse(localStorage.getItem(i)).Email;
			col3.innerHTML = JSON.parse(localStorage.getItem(i)).Name;
			col4.innerHTML = JSON.parse(localStorage.getItem(i)).Password;
			if(JSON.parse(localStorage.getItem(i)).enable == true) {
				col5.innerHTML = "Enabled";
			} else {
				col5.innerHTML = "Disabled";
			}
		} else break;
	}
}

function disable_user() {
	let usnm = prompt("Write Username")
	for(i = 1; i > 0; i++) {
		if(localStorage.getItem(i).length > 0) {
			if(JSON.parse(localStorage.getItem(i)).Name == usnm) {
				var obj = {
					Email: JSON.parse(localStorage.getItem(i)).Email,
					Name: JSON.parse(localStorage.getItem(i)).Name,
					Password: JSON.parse(localStorage.getItem(i)).Password,
					enable: false
				};
				localStorage.setItem(i, JSON.stringify(obj));
				break;
				window.location.href = "admin.html";
			} else {
				window.alert("Wrong Username");
				break;
			}
		} else break;
	}
}

function enable_user() {
	let usnm = prompt("Write Username")
	for(i = 1; i > 0; i++) {
		if(localStorage.getItem(i).length > 0) {
			if(JSON.parse(localStorage.getItem(i)).Name == usnm) {
				var obj = {
					Email: JSON.parse(localStorage.getItem(i)).Email,
					Name: JSON.parse(localStorage.getItem(i)).Name,
					Password: JSON.parse(localStorage.getItem(i)).Password,
					enable: true
				};
				localStorage.setItem(i, JSON.stringify(obj));
				break;
				window.location.href = "#";
			} else {
				window.alert("Wrong Username");
				break;
			}
		} else break;
	}
}

function chng_email() {
	let usnm = prompt("Write Username")
	let newemail = prompt("Write a new Email")
	for(i = 1; i > 0; i++) {
		if(localStorage.getItem(i).length > 0) {
			if(JSON.parse(localStorage.getItem(i)).Name == usnm) {
				var obj = {
					Email: newemail,
					Name: JSON.parse(localStorage.getItem(i)).Name,
					Password: JSON.parse(localStorage.getItem(i)).Password,
					enable: true
				};
				localStorage.setItem(i, JSON.stringify(obj));
				break;
				window.location.href = "#";
			} else {
				window.alert("Wrong Username");
				break;
			}
		} else break;
	}
}

function chng_pswrd() {
	let usnm = prompt("Write Username")
	let newpswrd = prompt("Write a new password")
	for(i = 1; i > 0; i++) {
		if(localStorage.getItem(i).length > 0) {
			if(JSON.parse(localStorage.getItem(i)).Name == usnm) {
				var obj = {
					Email: JSON.parse(localStorage.getItem(i)).Email,
					Name: JSON.parse(localStorage.getItem(i)).Name,
					Password: newpswrd,
					enable: true
				};
				localStorage.setItem(i, JSON.stringify(obj));
				break;
				window.location.href = "#";
			} else {
				window.alert("Wrong Username");
				break;
			}
		} else break;
	}
}