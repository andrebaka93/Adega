import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login, Usuario } from '../../shared/model';
import { UsuarioService } from '../usuario.service';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,
    private router: Router, private toastr: ToastrService, private cookie: CookieService) {
    this.formLogin = this.formBuilder.group({
      login: '',
      senha: ''
    });
  }

  ngOnInit() {
  }

  submitForm(login: Login) {
    let erro: boolean = false;
    if (login.login == null || login.login == '') {
      this.toastr.error('Informe o login');
      erro = true;
    }

    if (login.senha == null || login.senha == '') {
      this.toastr.error('Informe a senha');
      erro = true;
    }

    login.senha = CryptoJS.SHA256(login.senha).toString(CryptoJS.Base64);

    if (!erro) {
      this.usuarioService.logar(login).subscribe(
        (data: Usuario) => {
          this.cookie.set('usuario', JSON.stringify(data));

          this.router.navigateByUrl('/produtos', { state: { idCliente: data.idCliente } })
        }
      );
    }
  }

}
