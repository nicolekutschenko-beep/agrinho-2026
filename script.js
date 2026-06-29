const botao = document.getElementById("tema");

botao.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        botao.innerHTML = "☀️ Modo Claro";

    }else{

        botao.innerHTML = "🌙 Modo Escuro";

    }

});