import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ProdutosService } from "../produtos/produtos.service";
import { Produto } from "../../shared/model";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent {
  formProduto;
  idCliente;
  constructor(private formBuilder: FormBuilder, private service: ProdutosService, private route: Router, private toastr: ToastrService) {
    this.idCliente = this.route.getCurrentNavigation().extras.state.idCliente;
    this.formProduto = this.formBuilder.group({
      nome: '',
      descricao: '',
      quantidadeDisponivel: null,
      alertaMinimo: null,
      alertaMaximo: null,
      idCliente: this.idCliente,
      idProduto: 0
    });
  }

  submitForm(produto: Produto) {
    //Validação
    let erro: boolean = false;
    if (produto.quantidadeDisponivel == null || produto.quantidadeDisponivel < 0) {
      this.toastr.error('Campo não pode ser vazio nem negativo', 'Quantidade disponível');
      erro = true;
    }

    if (produto.nome == '' || produto.nome == null) {
      this.toastr.error('Campo nome é obrigatório', 'Nome');
      erro = true;
    }

    if (!erro) {
      this.service.salvarProduto(produto).subscribe(() =>
        this.route.navigateByUrl('/produtos', { state: { idCliente: this.idCliente } })
      );
    }
  }

  voltar() {
    this.route.navigateByUrl('/produtos', { state: { idCliente: this.idCliente }});
  }

}
