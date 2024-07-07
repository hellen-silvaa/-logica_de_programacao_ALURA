//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert("Boas vindas ao nosso site!");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

// Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
saldoDisponivel = 1000;

// Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");

// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos"
//Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let seu_nome = prompt('Digite o seu nome: ');

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt('Digite a sua idade: ');

// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18) {
    alert("Pode tirar a habilitação!")
}


//DESAFIOS 02

Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
dia_da_semana = prompt ('Digite o dia da semana: ');
if (dia_da_semana == 'Sábado' ){
    alert("Bom fim de semana!");
 }else if (dia_da_semana == 'Domingo' ){
    alert('"Bom fim de semana!"');
 }else {
    alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt ('Digite um número: ');
if (numero > 0 ){
    alert('O número digitado é positivo!');
} else {
    alert('O número digitado é negativo!');
}


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontos = 105;
if (pontos >= 100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo_conta = 10.000;
alert(`Seu saldo é ${saldo_conta}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

nome = prompt('Digite seu nome: ');
alert(`Seja bem vindo(a) ${nome}`);

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while(contador <=10) {
    console.log(contador);
    contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 10;
while(contador >= 0) {
    console.log(contador);
    contador--;
}
// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
n_regressivo = prompt('Diga um número')
while (n_regressivo >=0) {
    console.log(contador);
    contador--;
}

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
n_progressivo = prompt('Diga um número')
while (n_progressivo >=0) {
    console.log(contador);
    contador++;
    
}
let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
nome = 'Hellen Silva';
console.log(`Olá, ${nome}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome = 'Hellen Silva';
alert(`Olá, ${nome}`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemPreferida);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 20;
resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
 
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 50;
let valor2 = 20;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`)

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Qual é a sua idade: ");
if (idade >=18) {
    console.log("Você é maior de idade!!!");
}else {
    console.log("Você ainda é menor de idade");
}


// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um número: ")
if (numero > 0) {
    console.log("O número é positivo");
} else if (numero == 0){
    console.log("O número é zero");
}else{
    console.log("O número é negativo");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let numero =1;
while(numero <=10){
    console.log(numero);
    numero++;
}
// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6;
if(nota >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}
// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt (Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio = parseInt (Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);
