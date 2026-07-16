import { Component } from '@angular/core';
import { signal } from '@angular/core';
import{ Produto } from '../../../features/produtos/produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal([
    {nome: 'Teclado', preco: 49.99},
    {nome: 'Mouse', preco: 29.99},
    {nome: 'Monitor', preco: 599.99},
    {nome: 'Desktop', preco: 49.99},
    {nome: 'Headset', preco: 299.99}
  ]);
  exibirProduto (nome: string){
    console.log ('Produto Selecionado: ', nome);
  }
adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual, {nome:'Polystation', preco:100}
  ]);
}
totalProdutos = computed(() => this.produtos().length);

valorTotal = computed(() => {return this.produtos().reduce((total, item)=> total + item.preco, 0)});
substituirProdutos (){
  this.produtos.set([
    {nome: 'Arroz Fazenda', preco: 400},
  ]);
}
}