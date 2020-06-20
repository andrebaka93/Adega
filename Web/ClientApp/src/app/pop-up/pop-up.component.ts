import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProdutosService } from '../produtos/produtos.service';
import { DataPopUp } from '../produtos/produtos.component';
import { Entrada, Saida } from '../../shared/model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  quantidade: number;
  valor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DataPopUp, private dialogRef: MatDialogRef<PopUpComponent>,
    private produtosService: ProdutosService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

  salvar() {
    debugger;
    //Validação
    let erro: boolean = false;
    if (this.quantidade == null || this.quantidade < 1) {
      this.toastr.error('Quantidade deve ser maior que 0');
      erro = true;
    }

    if (this.valor == null || this.valor <= 0) {
      this.toastr.error('Valor total pago deve ser maior que 0');
      erro = true;
    }

    if (!erro) {
      if (this.data.titulo == 'Entrada') {
        let entrada: Entrada = new Entrada;
        entrada.idEntrada = 0;
        entrada.valorUnitario = 0;
        entrada.idProduto = this.data.idProduto;
        entrada.quantidade = this.quantidade;
        entrada.valorTotal = this.valor;

        this.produtosService.entrada(entrada).subscribe(() => {
          this.toastr.success('Sucesso', 'Entrada cadastrada com sucesso');
          this.dialogRef.close();
        });

      } else if (this.data.titulo == 'Saída') {
        let saida: Saida = new Saida;
        saida.idProduto = this.data.idProduto;
        saida.quantidade = this.quantidade;
        saida.valorTotal = this.valor;

        this.produtosService.saida(saida).subscribe(() => {
          this.toastr.success('Sucesso', 'Saída cadastrada com sucesso');
          this.dialogRef.close();
        });
      }
    }
  }

}
