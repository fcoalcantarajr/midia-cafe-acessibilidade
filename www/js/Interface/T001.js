<html>
<head> 
<title> T001 </title>
</head>


<body>


<h1>Obstáculos no local<h1>

<form method="post"action="cadastrar-dados.php">
<input type="checkbox" name="info[]" value="obf"/>
Obstáculo fixo
<br/>
<input type="checkbox" name="info[]" value="obm"/>
Obstáculo móvel
<br/>
<input type="checkbox" name="info[]" value="obr"/>
Obras
<br/>
<input type="checkbox" name="info[]" value="ala"/>
Alagado
<br/>
<input type="checkbox" name="info[]" value="bur"/>
Buraco
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
    alert("Em qual lado da via existe o obstáculo informado?");
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

</body>


</html>