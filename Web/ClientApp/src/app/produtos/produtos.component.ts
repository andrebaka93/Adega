import { Component, OnInit, OnChanges, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Produto } from '../../shared/model';
import { MatPaginator, PageEvent, MatDialog } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { PopUpConfirmComponent } from '../pop-up-confirm/pop-up-confirm.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit, OnChanges {

  idCliente: number;

  constructor(private service: ProdutosService, private dialog: MatDialog, private route: Router) {
    this.idCliente = this.route.getCurrentNavigation().extras.state.idCliente;
  }

  abrirPopUp(idProduto, tituloPopUp) {
    const dialogRef = this.dialog.open(PopUpComponent, { width: '250px', data: { titulo: tituloPopUp, idProduto } });

    dialogRef.afterClosed().subscribe(() => {
      this.paginar(null);
    });
  }

  abrirPopUpExclusao(idProduto) {
    const dialogRef = this.dialog.open(PopUpConfirmComponent, { width: '250px', data: { idProduto, tipoExclusao: 'produto' } });

    dialogRef.afterClosed().subscribe(() => this.paginar(null));
  }

  displayedColumns: string[];
  produtos: Array<Produto>;
  produtosPaginados: Array<Produto>;
  isMobile: boolean = document.body.clientWidth < 670;
  @ViewChild(MatPaginator, { static: true }) paginador: MatPaginator;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 670;

    this.verificaColunas();
  }
  
  ngOnChanges() {
    this.paginar(null);
    this.verificaColunas();
  }

  ngOnInit(): void {
    this.paginar(null);
    this.verificaColunas();
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
    this.service.consultarProdutos(this.idCliente).subscribe((data: any) => {
      this.produtos = data;
      this.produtosPaginados = data.slice(inicial, final);
    });
  }

  verificaColunas() {
    if (this.isMobile)
      this.displayedColumns = ['nome', 'controles'];
    else
      this.displayedColumns = ['nome', 'descricao', 'quantidadeDisponivel', 'controles'];
  }
}

export interface DataPopUp {
  titulo: string;
  idProduto: number;
}
