
function toggleMode(){
    

    const body = document.body;

    /**
     * Comentado, esta a ideia inicial que era criar uma estrutura 
     * condicional para para adicionar e remover a classe light ao 
     * clicar no botão switch
     */

    // if(body.classList.contains('light-mode')){
    //     body.classList.remove('light-mode');
    // }else{
    //     body.classList.add('light-mode');
    // }

    /**
     * Aqui foi adicionado uma estrutura que já faz exatamente isso
     * de uma maneira bem simplificada 
     */
    body.classList.toggle('light-mode');
}

function findMe(){
    alert("Ops! Esta tela ainda esta em Desenvolvimento. Logo Logo ela estará disponivel! Abraços");
}

function downloadEbook(){
    alert("Ops! O meu E-book ainda não esta disponivel. Logo Logo ele estará disponivel para Download! Abraços");
}

function ViewJobScreen(){
    alert("Ops! A tela que irá exibir os meus trabalhos ainda esta em Desenvolvimento. Logo Logo ela estará disponivel para Exibição! Abraços");
}