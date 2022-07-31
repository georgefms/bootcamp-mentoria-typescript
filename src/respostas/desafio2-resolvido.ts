//Usando enum e um novo tipo chamado pessoa foi possível resolver os erros.
enum Profissao {
  Atriz,
  Padeiro
}

type pessoa = {
  nome: string;
  idade: number;
  profissao: Profissao;
}

let pessoa1: pessoa = {
nome: "maria",
idade: 29,
profissao: Profissao.Atriz
};

let pessoa2:pessoa = {
nome: "roberto",
idade: 19,
profissao: Profissao.Padeiro
};

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}