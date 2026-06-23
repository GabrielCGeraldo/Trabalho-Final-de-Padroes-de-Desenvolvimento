// Exemplo SEM o padrão Iterator

const alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana"
];

console.log("=== SEM ITERATOR ===");
console.log("Percorrendo a lista de alunos:");

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}