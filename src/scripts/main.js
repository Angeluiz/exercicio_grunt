document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('mais').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let primeiroNumero = parseInt(document.getElementById('somar-primeiro-numero').value);
        let segundoNumero = parseInt(document.getElementById('somar-segundo-numero').value);
        let resultadoSoma = primeiroNumero + segundoNumero;

        document.getElementById('soma-resultado').innerText = resultadoSoma;

        document.querySelector('.resultado-mais').style.display = "block";

    });

    document.getElementById('menos').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let primeiroNumero = parseInt(document.getElementById('subtrair-primeiro-numero').value);
        let segundoNumero = parseInt(document.getElementById('subtrair-segundo-numero').value);
        let resultadoSoma = primeiroNumero - segundoNumero;

        document.getElementById('subitracao-resultado').innerText = resultadoSoma;

        document.querySelector('.resultado-menos').style.display = "block";
    });

});