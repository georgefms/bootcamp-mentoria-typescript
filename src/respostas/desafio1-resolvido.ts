// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

//Uma das formas de resolver esse desafio é usar uma interface para 
//funcionario e depois criar um objeto do tipo funcionario que a implemente


interface employee {
  name: string;
  code: number;
}

const Jooj: employee = {
  code: 10,
  name: "Jooj"
}