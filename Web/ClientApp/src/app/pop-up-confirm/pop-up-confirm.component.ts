import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProdutosService } from '../produtos/produtos.service';
import { ClientesService } from '../clientes/clientes.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-pop-up-confirm',
  templateUrl: './pop-up-confirm.component.html',
  styleUrls: ['./pop-up-confirm.component.css']
})
export class PopUpConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PopUpConfirmComponent>,
    private produtosService: ProdutosService, private clienteService: ClientesService, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
  }

  clickSim() {
    debugger;
    switch (this.data.tipoExclusao) {
      case 'produto':
        this.produtosService.excluir(this.data.idProduto).subscribe(() => this.dialogRef.close());
        break;
      case 'cliente':
        this.clienteService.excluir(this.data.idCliente).subscribe(() => this.dialogRef.close());
        break;
      case 'usuario':
        this.usuarioService.excluir(this.data.idUsuario).subscribe(() => this.dialogRef.close());
        break;
    }
  }

  clickNao() {
    this.dialogRef.close();
  }

}
