# Trabalho-Final-de-Padroes-de-Desenvolvimento
📚 Padrão de Projeto Iterator
Engenharia de Software II

📖 Introdução

O Iterator é um dos padrões comportamentais definidos pelo GoF (Gang of Four) e tem como principal objetivo fornecer uma forma de percorrer elementos de uma coleção sem expor sua estrutura interna.

🎯 Problema

Em muitos sistemas é necessário percorrer listas de objetos.

Sem a utilização do padrão Iterator, o código que consome a coleção precisa conhecer sua estrutura interna.

Exemplo sem Iterator
const alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana"
];

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}
Saída
João
Maria
Pedro
Ana
Problemas dessa abordagem
O código depende diretamente da estrutura da coleção.
Caso a implementação da coleção seja alterada, o código também precisará ser alterado.
Existe maior acoplamento entre quem armazena os dados e quem os percorre.
Dificulta manutenção e reutilização.
💡 Solução

O padrão Iterator propõe criar um objeto responsável exclusivamente pela navegação dos elementos.

Assim, o cliente não precisa conhecer detalhes internos da coleção.

🏗 Estrutura do Padrão
Cliente
   |
   v
Iterator
   |
   v
Coleção
Participantes
Collection (Aggregate)

Responsável por armazenar os elementos.

Iterator

Responsável pela navegação da coleção.

Cliente

Utiliza o Iterator para acessar os elementos.

🔄 Implementação com Iterator
Classe Iterator
class AlunoIterator {
    constructor(alunos){
        this.alunos = alunos;
        this.posicao = 0;
    }

    hasNext(){
        return this.posicao < this.alunos.length;
    }

    next(){
        return this.alunos[this.posicao++];
    }
}
Utilização
const alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana"
];

const iterator = new AlunoIterator(alunos);

while(iterator.hasNext()){
    console.log(iterator.next());
}
Saída
João
Maria
Pedro
Ana
⚖ Comparação: Sem Padrão x Com Padrão
Sem Iterator
const alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana"
];

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}
Características
A navegação está misturada com a lógica da aplicação.
O cliente conhece a estrutura da coleção.
Maior acoplamento.
Menor flexibilidade.
Com Iterator
class AlunoIterator {
    constructor(alunos){
        this.alunos = alunos;
        this.posicao = 0;
    }

    hasNext(){
        return this.posicao < this.alunos.length;
    }

    next(){
        return this.alunos[this.posicao++];
    }
}

const iterator = new AlunoIterator(alunos);

while(iterator.hasNext()){
    console.log(iterator.next());
}
Características
A navegação é encapsulada.
O cliente não conhece a estrutura interna da coleção.
Menor acoplamento.
Maior reutilização.
Facilita manutenção.
🔍 Diferença Principal
Sem o padrão

O código precisa saber exatamente como acessar os elementos.

alunos[i]

Se a estrutura mudar, será necessário alterar a lógica de navegação.

Com o padrão

O código apenas solicita o próximo elemento.

iterator.next()

Não importa como os dados estão armazenados internamente.

A responsabilidade de navegação fica concentrada no Iterator.

🌎 Exemplo do Mundo Real

Imagine um sistema de biblioteca.

O usuário deseja percorrer uma lista de livros.

Sem Iterator, seria necessário conhecer a estrutura utilizada para armazenar os livros.

Com Iterator, basta utilizar:

iterator.next()

Independentemente de os dados estarem em:

Array
Lista
Banco de dados
API
Arquivo

A navegação permanece igual.

✅ Vantagens
Reduz o acoplamento.
Oculta a estrutura interna da coleção.
Facilita manutenção.
Facilita reutilização de código.
Segue os princípios da orientação a objetos.
Permite múltiplas formas de navegação.
❌ Desvantagens
Aumenta a quantidade de classes.
Pode adicionar complexidade em sistemas pequenos.
Possui pequena sobrecarga de implementação.
▶ Como Executar
Pré-requisitos
Node.js instalado
Executar
node iterator.js
Saída Esperada
João
Maria
Pedro
Ana


Pontos Fortes do Iterator

O padrão Iterator apresenta diversas vantagens:

Permite percorrer uma coleção sem expor sua estrutura interna.
Reduz o acoplamento entre a coleção e o código que a utiliza.
Facilita a manutenção do sistema.
Permite reutilizar a lógica de navegação.
Segue os princípios da programação orientada a objetos.
Possibilita diferentes formas de percorrer a mesma coleção.
Exemplo

O cliente não precisa saber se os dados estão armazenados em:

Array
Lista
Banco de Dados
API

Ele apenas utiliza:

iterator.next()


Pontos Fracos do Iterator

Apesar das vantagens, o padrão também possui algumas limitações:

Aumenta a quantidade de classes do projeto.
Pode adicionar complexidade desnecessária em sistemas simples.
Exige mais código quando comparado a um simples laço for.
Pode gerar pequena sobrecarga de memória dependendo da implementação.
Exemplo

Para percorrer uma lista simples:

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

a utilização do Iterator pode parecer exagerada.

Comparação Entre as Soluções
Solução Sem Iterator
const alunos = ["João", "Maria", "Pedro", "Ana"];

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}
Características
Simples de implementar.
Funciona bem para listas pequenas.
Alto acoplamento com a estrutura da coleção.
Menor flexibilidade.
Solução Com Iterator
while(iterator.hasNext()){
    console.log(iterator.next());
}
Características
Navegação desacoplada da coleção.
Maior flexibilidade.
Melhor manutenção.
Mais próximo dos princípios de orientação a objetos.

Conclusão

Após o estudo do padrão Iterator, foi possível observar que sua principal vantagem é separar a lógica de navegação da lógica de armazenamento dos dados. Isso torna o sistema mais organizado, flexível e fácil de manter.
Embora a implementação seja mais complexa do que uma solução tradicional utilizando laços de repetição, o padrão se mostra muito útil em projetos maiores, onde diferentes tipos de coleções precisam ser percorridos de forma padronizada.
Concluímos que o Iterator é uma solução eficiente para reduzir o acoplamento e aumentar a reutilização do código, sendo amplamente utilizado em diversas linguagens e bibliotecas modernas.
