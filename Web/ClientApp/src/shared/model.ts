export class Produto {
  idProduto: number;
  nome: string;
  descricao: string;
  quantidadeDisponivel: number;
  alertaMinimo: number;
  alertaMaximo: number;
  idCliente: number;
}

export class Entrada {
  idEntrada: number;
  idProduto: number;
  quantidade: number;
  valorTotal: number;
  valorUnitario: number;
}

export class Saida {
  idSaida: number;
  idProduto: number;
  quantidade: number;
  valorTotal: number;
  valorUnitario: number;
}

export class Login {
  login: string;
  senha: string;
}

export class Usuario {
  idUsuario: number;
  nome: string;
  login: string;
  senha: string;
  confirmacaoSenha: string;
  idCliente: number;
}


export class Cliente {
  idCliente: number;
  nome: string;
  endereco: string;
  ativo: boolean;
}
