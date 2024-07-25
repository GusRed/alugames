quantidadeAlugados();

function alterarStatus(idJogo){
    let jogo = document.getElementById(`game-${idJogo}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let statusBotao = jogo.querySelector(".dashboard__item__button");
    let nomeJogo = jogo.querySelector('.dashboard__item__name');

    if (imagem.classList.contains("dashboard__item__img--rented") && statusBotao.classList.contains("dashboard__item__button--return")){

        if (confirm(`Você realmente deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove("dashboard__item__img--rented");
            statusBotao.classList.remove("dashboard__item__button--return");
            statusBotao.textContent = "Alugar";
        }
        
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        statusBotao.classList.add("dashboard__item__button--return");
        statusBotao.textContent = "Devolver";
    }

    quantidadeAlugados();
}



function quantidadeAlugados(){
    let quantidade = 0;

    for (let i = 1; i <= 3; i++){
        let jogo = document.getElementById(`game-${i}`);
        let statusBotao = jogo.querySelector(".dashboard__item__button");

        if (statusBotao.classList.contains("dashboard__item__button--return")){
            quantidade++;
        }

    }

    let palavraJogos;

    if (quantidade == 1){
        palavraJogos = `Foi alugado ${quantidade} jogo`;
    } else if (quantidade > 1){
        palavraJogos = `Foram alugados ${quantidade} jogos`
    } else {
        palavraJogos = "Nenhum jogo foi alugado"
    }

    console.log(palavraJogos);
}