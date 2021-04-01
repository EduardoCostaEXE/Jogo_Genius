let ordem = [];
let cliques = [];
let pontuacao = 0;

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

let ordemAleatoria = () => {
    let ordemCor = Math.floor(Math.random() *4);
    ordem[ordem.length] = ordemCor;
    cliques = [];

    for(let i in ordem){
        let corSelecionada = createColorElement(order[i]);
        lightColor(corSelecionada, Number[i] + 1);
    }
}

//Cria próxima por
let lightColor = (element, number) => {
    number = number*200;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


//Checa os botões clicados
let checkOrder = () => {
    for(let i in cliques) {
        if(cliques[i] != ordem[i]){
            lose();
            break;
        }
    }
    if(cliques.length == ordem.length){
        alert(`Pontuação: ${pontuacao}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let clique = (color) => {
    cliques[cliques.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
};

//Retorna cor
let createColorElement = (color) => {
    if(color == 0){
        return verde;
    } else if(color == 1){
        return vermelho;
    }else if(color == 2){
        return amarelo;
    } else if (color == 3){
        return azul;
    }

}

//função para proximo nivel
let nextLevel = () => {
    pontuacao++;
    ordemAleatoria();
}

//gameover
let lose = () => {
    alert(`Pontuação: ${pontuacao}\nClique OK para recomeçar`);
    ordem = [];
    cliques = [];
    playGame();
}

let playGame = () => {
    pontuacao = 0;
    alert('Bem vindo ao Genius!');

    nextLevel();
}

//cliques
verde.onclick = () => clique(0);
vermelho.onclick = () => clique(1);
amarelo.onclick = () => clique(2);
azul.onclick = () => clique(3);

playGame();

