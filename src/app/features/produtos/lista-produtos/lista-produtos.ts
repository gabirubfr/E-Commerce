import { Component, signal } from '@angular/core';
import{ Produto } from '../../../features/produtos/produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
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
}