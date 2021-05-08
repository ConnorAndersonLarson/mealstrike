fetch("https://joshbegley-dronestream.p.rapidapi.com/data", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6adf6f3fc6msh5fc107c2e27ed59p1dc91ejsn59fcb7716711",
		"x-rapidapi-host": "joshbegley-dronestream.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
