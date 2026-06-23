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
📌 Conclusão

O padrão Iterator permite percorrer coleções de forma organizada e desacoplada, escondendo detalhes da implementação interna dos dados.

Comparado à solução tradicional, o Iterator oferece maior flexibilidade, reutilização e facilidade de manutenção, sendo amplamente utilizado em linguagens modernas e bibliotecas que trabalham com coleções de objetos.