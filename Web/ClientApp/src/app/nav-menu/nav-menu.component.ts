import { Component } from '@angular/core';
import { Usuario } from '../../shared/model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  usuario: Usuario;
  isExpanded = false;

  constructor(private cookie: CookieService, private router: Router) {
    this.usuario = JSON.parse(cookie.get('usuario'));
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  redirect(url: string) {
    this.router.navigate(['/' + url], { state: { idCliente: this.usuario.idCliente } });
  }

  logOff() {
    this.cookie.delete('usuario');
    this.router.navigateByUrl('/login');
  }
}
