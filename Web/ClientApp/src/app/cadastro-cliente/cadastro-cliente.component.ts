import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/model';
import { FormBuilder } from '@angular/forms';
import { ClientesService } from '../clientes/clientes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  formCliente;

  constructor(private formBuilder: FormBuilder, private service: ClientesService, private route: Router, private toastr: ToastrService) {
    this.formCliente = this.formBuilder.group({
      nome: '',
      endereco: '',
      idCliente: 0,
      ativo: true
    });
  }

  submitForm(cliente: Cliente) {
    //Validação
    let erro: boolean = false;
    
    if (cliente.nome == '' || cliente.nome == null) {
      this.toastr.error('Campo nome é obrigatório', 'Nome');
      erro = true;
    }

    if (cliente.endereco == '' || cliente.endereco == null) {
      this.toastr.error('Campo endereço é obrigatório', 'Endereço');
      erro = true;
    }

    if (!erro) {
      this.service.salvarCliente(cliente).subscribe(() => this.route.navigateByUrl('/clientes'));
    }
  }

  voltar() {
    this.route.navigateByUrl('/produtos');
  }
}
