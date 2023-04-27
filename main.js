function getAxes() {
	fetch('http://localhost:8080/server.php?request=axes')
		.then(response => response.json())
		.then(data => {
			let element = document.getElementById('axe')
			element.innerHTML = ''
			element.innerHTML += `<option value="">-- Axe stratégique --</option>`
			for (axe of data) {
				element.innerHTML += `<option value="${axe.id}">${axe.text}</option>`
			}
		})
		.catch(error => console.log(error))	
}

function getObjectifs() {
	let axe = document.getElementById('axe').value
	fetch(`http://localhost:8080/server.php?request=objectifs&axe=${axe}`)
		.then(response => response.json())
		.then(data => {
			let element = document.getElementById('objectif')
			element.innerHTML = ''
			element.innerHTML += `<option value="">-- Objectif stratégique --</option>`
			for (objectif of data) {
				element.innerHTML += `<option value="${objectif.id}">${objectif.text}</option>`
			}
		})
		.catch(error => console.log(error))	
}

function getActeurs() {
	fetch('http://localhost:8080/server.php?request=acteurs')
		.then(response => response.json())
		.then(data => {
			let element = document.getElementById('acteur')
			element.innerHTML = ''
			element.innerHTML += `<option value="">-- Acteur --</option>`
			for (acteur of data) {
				element.innerHTML += `<option value="${acteur.id}">${acteur.text}</option>`
			}
		})
		.catch(error => console.log(error))
}

function getIndicateurs() {
	let objectif = document.getElementById('objectif').value
	let acteur = document.getElementById('acteur').value

	fetch(`http://localhost:8080/server.php?request=indicateurs&objectif=${objectif}&acteur=${acteur}`)
		.then(response => response.json())
		.then(data => {
			document.getElementById('indicateurs').innerHTML = ''
			for (indicateur of data) {
				document.getElementById('indicateurs').innerHTML += `<tr><td>${indicateur.id}</td><td>${indicateur.text}</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>`
			}
			console.log(data)
		})
		.catch(error => console.log(error))	
}

getAxes()
getActeurs()