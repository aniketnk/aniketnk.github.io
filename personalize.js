const personalize = (data) => {
	data.theme && (document.getElementById("_theme").href = data.theme);
	data.name && (document.getElementById("_name").innerHTML = data.name);
	data.pageTitle && (document.getElementById("_pageTitle").innerHTML = data.pageTitle);
	data.tagline && (document.getElementById("_tagline").innerHTML = data.tagline);
	if (data.links) {
		const socialDiv = document.getElementById("_social");
		data.links.forEach(element => {
			var entry = document.createElement("a");
			entry.href = element.href;
			entry.target = "_blank";
			if (element.class) {
				var icon = document.createElement("i");
				icon.className = element.class;
				entry.appendChild(icon);
			}
			socialDiv.appendChild(entry);
		});
	}
}

const load = () => {
	var request = new XMLHttpRequest();
	request.open('GET', '/details.json', true);

	request.onload = function () {
		if (this.status >= 200 && this.status < 400) {
			// Success!
			var data = JSON.parse(this.response);
			console.log(data);
			personalize(data);
		} else {
			// We reached our target server, but it returned an error

		}
	};

	request.onerror = function () {
		// There was a connection error of some sort
	};

	request.send();
}