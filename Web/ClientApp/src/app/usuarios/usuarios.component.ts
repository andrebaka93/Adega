import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator, MatDialog } from '@angular/material';
import { PopUpConfirmComponent } from '../pop-up-confirm/pop-up-confirm.component';
import { Usuario } from '../../shared/model';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  idCliente: number;
  usuarios: Array<Usuario>;
  usuariosPaginados: Array<Usuario>;
  displayedColumns: string[];
  isMobile: boolean = document.body.clientWidth < 670;

  @ViewChild(MatPaginator, { static: true }) paginador: MatPaginator;

  constructor(private usuarioService: UsuarioService, private dialog: MatDialog, private router: Router) {
    this.idCliente = this.router.getCurrentNavigation().extras.state.idCliente;
  }

  ngOnInit() {
    this.paginar(null);
    this.verificaColunas();
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isMobile = event.target.innerWidth < 670;

    this.verificaColunas();
  }

  ngOnChanges() {
    this.paginar(null);
    this.verificaColunas();
  }

  abrirPopUpExclusao(idUsuario) {
    const dialogRef = this.dialog.open(PopUpConfirmComponent, { width: '250px', data: { idUsuario, tipoExclusao: 'usuario' } });

    dialogRef.afterClosed().subscribe(() => this.paginar(null));
  }



  paginar(event: PageEvent) {
    let inicial: number;
    let final: number;

    if (event == null) {
      inicial == 1;
      final = 5;
    }
    else {
      inicial = ((event.pageIndex + 1) * event.pageSize) - event.pageSize;
      final = ((event.pageIndex + 1) * event.pageSize);
    }
    this.usuarioService.consultarUsuario(this.idCliente).subscribe((data: any) => {
      console.log(data);
      this.usuarios = data;
      this.usuariosPaginados = data.slice(inicial, final);
    });
  }

  verificaColunas() {
    if (this.isMobile)
      this.displayedColumns = ['nome', 'login', 'controles'];
    else
      this.displayedColumns = ['nome', 'login', 'controles'];
  }

  cadastroUsuario() {
    this.router.navigate(['/cadastro-usuario'], { state: { idCliente: this.idCliente } });
  }
}
