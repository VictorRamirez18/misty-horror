function page(){
	pagina = document.getElementById('pagina').text;
	switch(pagina){
		case "Moovies":
			document.getElementById('navMoovies').style.background = "#5F9EA0";
			date();
			break;
		case "Books":
			document.getElementById('navBooks').style.background = "#5F9EA0";
			date(); 
			break;
		case "Videogames":
			document.getElementById('navGames').style.background = "#5F9EA0"; 
			date();
			break;
		case "Characters":
			document.getElementById('navCharacters').style.background = "#5F9EA0"; 
			break;

	}

}
function date(){
	var fecha = new Date()
	var fechaDefault = `${String(fecha.getFullYear())}-0${String(fecha.getMonth() +1)}`;
	document.getElementById('inputYear').value = fechaDefault;
}