import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../shared/model';
import { UsuarioService } from '../usuario.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  formUsuario;
  idCliente: number;

  constructor(private formBuilder: FormBuilder, private service: UsuarioService, private route: Router, private toastr: ToastrService) {
    this.idCliente = this.route.getCurrentNavigation().extras.state.idCliente;
    
    this.formUsuario = this.formBuilder.group({
      idUsuario: 0,
      nome: '',
      login: '',
      senha: '',
      confirmacaoSenha: '',
      idCliente: 0
    });
  }

  ngOnInit() {

  }

  submitForm(usuario: Usuario) {
    //Validação
    usuario.idCliente = this.idCliente;

    let erro: boolean = false;

    if (usuario.senha != usuario.confirmacaoSenha) {
      this.toastr.error('Confirmação de senha incorreta', 'Confirmação de senha');
      erro = true;
    }

    if (usuario.confirmacaoSenha == '') {
      this.toastr.error('Campo de confirmação da senha é obrigatório', 'Confirmação de senha');
      erro = true;
    }

    if (usuario.senha == '') {
      this.toastr.error('Campo senha é obrigatório', 'Senha');
      erro = true;
    }

    if (usuario.login == '' || usuario.login == null) {
      this.toastr.error('Campo login é obrigatório', 'Login');
      erro = true;
    }

    if (usuario.nome == '' || usuario.nome == null) {
      this.toastr.error('Campo nome é obrigatório', 'Nome');
      erro = true;
    }

    usuario.senha = CryptoJS.SHA256(usuario.senha).toString();

    if (!erro) {
      this.service.salvarUsuario(usuario).subscribe(() => this.route.navigateByUrl('/clientes'));
    }
  }

  voltar() {
    this.route.navigateByUrl('/clientes');
  }
}
