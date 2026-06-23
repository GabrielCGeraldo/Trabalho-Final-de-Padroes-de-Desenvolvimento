// Exemplo COM o padrão Iterator

class AlunoIterator {
    constructor(alunos) {
        this.alunos = alunos;
        this.posicao = 0;
    }

    hasNext() {
        return this.posicao < this.alunos.length;
    }

    next() {
        return this.alunos[this.posicao++];
    }
}

class ColecaoAlunos {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(nome) {
        this.alunos.push(nome);
    }

    criarIterator() {
        return new AlunoIterator(this.alunos);
    }
}

// Criando coleção
const colecao = new ColecaoAlunos();

colecao.adicionarAluno("João");
colecao.adicionarAluno("Maria");
colecao.adicionarAluno("Pedro");
colecao.adicionarAluno("Ana");

// Criando Iterator
const iterator = colecao.criarIterator();

console.log("=== COM ITERATOR ===");
console.log("Percorrendo a lista de alunos:");

while (iterator.hasNext()) {
    console.log(iterator.next());
}