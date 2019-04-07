<html>
<head> 
<title> T002 </title>
</head>


<body>


<h1>Recursos no local<h1>

<form method="post"action="cadastrar-dados.php">
<input type="checkbox" name="info[]" value="rmp"/>
Rampa
<br/>
<input type="checkbox" name="info[]" value="can"/>
Calçada Nivelada
<br/>
<input type="checkbox" name="info[]" value="pis"/>
Piso Anti-Aderente
<br/>
<input type="checkbox" name="info[]" value="cal"/>
Calçada Larga
<br/>
<input type="checkbox" name="info[]" value="out"/>
Outros
<br/><br/>
<input type="submit" value="Enviar"/>
<input type="reset" value="Cancelar"/>
</form>

</body>


<script>
function mostrarAgradecimento() {
    alert("Em qual lado da via existe o recurso informado?");
	<form> 
	<input type="submit1" value="Direita"/>
	<input type="submit2" value="Esquerda"/>
	</form>
}
document.getElementById("submit").onkeypress = function(e) {
    
    if (e.keyCode == 13) {
        mostrarAgradecimento();
        e.preventDefault();
    }
}

</script>


</html>