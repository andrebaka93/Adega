import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from '../../shared/model';
import { PopUpConfirmComponent } from '../pop-up-confirm/pop-up-confirm.component';
import { MatDialog, PageEvent, MatPaginator } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Cliente>;
  clientesPaginados: Array<Cliente>;
  displayedColumns: string[];
  isMobile: boolean = document.body.clientWidth < 670;

  @ViewChild(MatPaginator, { static: true }) paginador: MatPaginator;

  constructor(private clientesService: ClientesService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.paginar(null);
    this.verificaColunas();
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 670;

    this.verificaColunas();
  }

  ngOnChanges() {
    this.paginar(null);
    this.verificaColunas();
  }

  abrirPopUpExclusao(idCliente) {
    const dialogRef = this.dialog.open(PopUpConfirmComponent, { width: '250px', data: { idCliente, tipoExclusao: 'cliente' } });

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
    this.clientesService.consultarClientes().subscribe((data: any) => {
      this.clientes = data;
      this.clientesPaginados = data.slice(inicial, final);
    });
  }

  verificaColunas() {
    if (this.isMobile)
      this.displayedColumns = ['nome', 'ativo', 'controles'];
    else
      this.displayedColumns = ['nome', 'endereco', 'ativo', 'controles'];
  }

  usuarios(idCliente: number) {
    this.router.navigate(['/usuarios'], { state: { idCliente } });
  }
}
