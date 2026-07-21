import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UpperCasePipe, CurrencyPipe} from '@angular/common';
import {PrecoFormatadoPipe} from '../../../shared/pipes/preco-formatado-pipe';
//feat: adiciona função Produto para mostrar produto e preço
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe,],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome: string = '';
  @Input() preco: number = 0;
  @Output() produtoSelecionado = new EventEmitter<string>()
  selecionarProduto(){
    this.produtoSelecionado.emit(this.nome)
  }
}